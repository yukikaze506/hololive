import { execSync } from 'child_process';
import * as copyDir from 'copy-dir';
import * as fs from 'fs-extra';
import * as rimraf from 'rimraf';

main(process.argv[2]);

/**
 * メインメソッド
 * 引数で実行する関数を振り分ける
 * @param targetScript 処理ターゲット
 */
function main(targetScript: string): void {
    // 作業ディレクトリの削除
    rimraf.sync('src');

    // 作業ディレクトリの作成
    fs.mkdirSync('src');

    // Youtube Crawler
    if (!targetScript || targetScript === 'youtubeCrawler') {
        youtubeCrawler();
    }
}

/**
 * Youtube Crawlerのビルド
 */
function youtubeCrawler(): void {
    const dir = 'cronTasks/youtubeCrawler';

    // 作業ディレクトリの作成
    fs.mkdirsSync(`src/${dir}`);

    // ファイルのコピー
    copyDir.sync(`../backend/${dir}`, `./src/${dir}`, {
        filter: (stat, filepath, filename) => filepath.indexOf('node_modules') === -1
    });

    // npm install & ビルド
    command(`cd ./src/${dir} && npm install && tsc`);

    // ビルド用ファイル削除
    rimraf.sync(`src/${dir}/node_modules`);

    // npm install(production)
    command(`cd ./src/${dir} && npm install --production`);

    // 不要なファイルを削除する
    rimraf.sync(`./src/${dir}/src`);
    fs.unlinkSync(`./src/${dir}/tsconfig.json`);
    fs.unlinkSync(`./src/${dir}/package.json`);
    fs.unlinkSync(`./src/${dir}/package-lock.json`);
}

/**
 * ログを出力しながらシェルコマンドを実行するメソッド
 * @param cmd 実行するコマンド
 */
function command(cmd: string): void {
    try {
        const result = execSync(cmd, {
            encoding: 'utf-8'
        }).toString();

        console.log(result);
    } catch (error) {
        console.error(error);

        throw error;
    }
}
