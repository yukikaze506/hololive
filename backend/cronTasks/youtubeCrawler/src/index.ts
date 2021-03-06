import * as MariaDB from 'mariadb';
import fetch from 'node-fetch';
import { interval, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as database from './database';
import { YoutubeApiResult, YoutubeList } from './interfaces';

/**
 * 5分に1回くらい実行する感じ
 */
async function main(): Promise<void> {
    console.log(`[${new Date()}] === Youtube Crawler 開始 ======================`);

    var conn: MariaDB.Connection | null = null;

    try {
        // DBコネクションの取得
        conn = await database.getConnection();

        // 更新対象の情報取得
        const youtubeList: YoutubeList[] = await getUpdateTargetData(conn);

        // Youtube APIから情報を取得
        const apiResult: YoutubeApiResult = await getYoutubeChannelData(youtubeList);

        // DBの更新
        await setLatestChannelData(conn, apiResult);
    } catch (error) {
        console.error(error);
        console.error('=== Youtube Crawler 処理でエラーが発生しました ===');

        throw error;
    } finally {
        try {
            if (!!conn) {
                conn.end();
            }
        } finally {
            console.log(`[${new Date()}] === Youtube Crawler 終了 ======================`);
        }
    }
}

/**
 * データベースのyoutubeテーブルから更新対象のデータを取得する
 * @param conn データベースへのコネクション
 */
async function getUpdateTargetData(conn: MariaDB.Connection): Promise<YoutubeList[]> {
    const youtubeList: YoutubeList[] = await conn
        .query(
            `
            SELECT
                id,
                channel_id
            FROM
                youtube;
            `
        )
        .catch(error => {
            console.error('Query実行エラー');

            throw error;
        });

    return youtubeList;
}

/**
 * Youtube APIからチャンネル情報を取得する
 * @param youtubeList 更新対象のデータ
 */
async function getYoutubeChannelData(youtubeList: YoutubeList[]): Promise<YoutubeApiResult> {
    const youtubeParts = [
        'brandingSettings',
        // 'contentDetails',
        // 'id',
        // 'invideoPromotion',
        'snippet',
        'statistics'
        // 'topicDetails'
    ].join(',');
    const apiKey = process.env.YOUTUBE_DATA_API_V3;
    const requestUrlBase = `https://www.googleapis.com/youtube/v3/channels?part=${youtubeParts}&key=${apiKey}&id=`;
    const apiResult: YoutubeApiResult = await fetch(
        `${requestUrlBase}${youtubeList.map(data => data.channelId).join(',')}`,
        {
            method: 'GET',
            compress: true
        }
    )
        .then(result => result.json())
        .catch(error => {
            console.error('Youtube API実行エラー');

            throw error;
        });

    return apiResult;
}

/**
 * Youtube APIから取得したデータをデータベースにセットする
 * @param apiResult Youtube APIから取得したデータ
 */
async function setLatestChannelData(conn: MariaDB.Connection, apiResult: YoutubeApiResult): Promise<void> {
    const now = new Date();

    for (const item of apiResult.items) {
        await conn
            .query(
                `
                UPDATE
                    youtube
                SET
                    channel_name = ?,
                    subscriber_count = ?,
                    view_count = ?,
                    banner_image_url = ?,
                    banner_image_url_mobile = ?,
                    user_icon = ?,
                    original_data = ?,
                    last_updated = ?
                WHERE
                    channel_id = ?;
                `,
                [
                    item.brandingSettings.channel.title,
                    item.statistics.subscriberCount,
                    item.statistics.viewCount,
                    item.brandingSettings.image.bannerImageUrl,
                    item.brandingSettings.image.bannerMobileImageUrl,
                    item.snippet.thumbnails.medium.url,
                    item,
                    now,
                    item.id
                ]
            )
            .catch(error => {
                console.error(`Youtubeテーブル更新エラー[${item.brandingSettings.channel.title}]`);
                console.error(error);
            });
    }
}

// main関数の実行
// 5分ごとに定期実行
const delayTime = 1000 * +(process.env.YOUTUBE_CRAWLER_DELAY_TIME || 300);
const cronTask = interval(delayTime).pipe(
    tap(async () => main()),
    catchError(error => {
        setTimeout(() => cronTask.subscribe(), delayTime);

        return throwError(error);
    })
);

cronTask.subscribe();
