import * as MariaDB from 'mariadb';
import fetch from 'node-fetch';
import * as database from './database';

console.log('=== Youtube Crawler 開始 ======================');

var conn: MariaDB.Connection;

/**
 * 10分に1回くらい実行する感じ
 */
async function main(): Promise<void> {
    const youtubeParts = [
        // 'brandingSettings',
        // 'contentDetails',
        // 'id',
        // 'invideoPromotion',
        'snippet',
        'statistics'
        // 'topicDetails'
    ].join(',');
    const apiKey = '';
    const requestUrlBase = `https://www.googleapis.com/youtube/v3/channels?part=${youtubeParts}&key=${apiKey}&id=`;

    conn = await database.getConnection();
    const youtubeList: { id: string; channelId: string }[] = await conn
        .query({
            sql: 'SELECT id, channel_id FROM youtube LIMIT 2;'
        })
        .catch(error => {
            console.error('Query実行エラー');

            throw error;
        });

    for (const data of youtubeList) {
        const apiResult = await fetch(`${requestUrlBase}${data.channelId}`, {
            method: 'GET',
            compress: true
        })
            .then(result => result.json())
            .catch(error => {
                console.error('Youtube API実行エラー');

                throw error;
            });

        console.log(apiResult);
    }
}

(async () => await main())()
    .then(() => console.log('=== Youtube Crawler 終了 ======================'))
    .catch(error => {
        console.error(error);
        console.error('=== Youtube Crawler処理でエラーが発生しました ===');
    })
    .finally(() => {
        if (!!conn) {
            conn.end();
        }
    });
