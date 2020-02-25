import camelcase from 'camelcase-keys';
import * as MariaDB from 'mariadb';

export async function getConnection(): Promise<MariaDB.Connection> {
    const connection: MariaDB.Connection = await MariaDB.createConnection({
        host: 'hololive-db',
        port: 3306,
        user: 'root',
        password: 'kO#@MaV*ie383:Ac71E%',
        database: 'hololive'
    }).catch(error => {
        console.error('DB接続エラー');

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
