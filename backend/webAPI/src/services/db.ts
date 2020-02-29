import { $log, Service } from '@tsed/common';
import camelcase from 'camelcase-keys';
import * as MariaDB from 'mariadb';

@Service()
export class DB {
    async getConnection(): Promise<MariaDB.Connection> {
        const connection: MariaDB.Connection = await MariaDB.createConnection({
            host: process.env.MARIA_DB_HOST,
            port: +(process.env.MARIA_DB_PORT || 3306),
            user: process.env.MARIA_DB_USER,
            password: process.env.MARIA_DB_PASSWORD,
            database: process.env.MARIA_DB_DATABASE
        }).catch(error => {
            $log.error('DB接続エラー');

            throw error;
        });

        // 元のQueryの関数を上書きして、結果をCamelCaseに変換する処理を追加する
        const originalQuery = connection.query;

        connection.query = async (sql: string | MariaDB.QueryOptions, values?: any): Promise<any> => {
            const result: any[] = await originalQuery(sql, values);

            return Array.isArray(result)
                ? result.map(data =>
                      camelcase(data, {
                          deep: true
                      })
                  )
                : result;
        };

        return connection;
    }
}
