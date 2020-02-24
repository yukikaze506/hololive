console.log('=== Youtube Crawler 開始 ======================');

import * as MariaDB from 'mariadb';
import * as database from './database';

async function main(): Promise<void> {
    const conn: MariaDB.Connection = await database.getConnection();
    const result = await conn.query('SELECT * FROM members;');

    console.log(result);
}

(async () => await main())()
    .then(() => console.log('=== Youtube Crawler 終了 ======================'))
    .catch(() => console.error('=== Youtube Crawler処理でエラーが発生しました ==='));
