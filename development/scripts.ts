import { execSync } from 'child_process';
import * as copyDir from 'copy-dir';
import * as fs from 'fs-extra';
import * as rimraf from 'rimraf';

const OUTPUT_DIR = 'dist';

main(process.argv[2]);

/**
 * メインメソッド
 * 引数で実行する関数を振り分ける
 * @param targetScript 処理ターゲット
 */
function main(targetScript: string): void {
    // Youtube Crawler
    if (!targetScript || targetScript === 'youtubeCrawler') {
        youtubeCrawler();
    }

    // Web API
    if (!targetScript || targetScript === 'webAPI') {
        webAPI();
    }
}

/**
 * Youtube Crawlerのビルド
 */
function youtubeCrawler(): void {
    const dir = 'backend/cronTasks/youtubeCrawler';
    const outputDir = `${OUTPUT_DIR}/${dir}`;

    // 作業ディレクトリの削除
    rimraf.sync(outputDir);

    // 作業ディレクトリの作成
    fs.mkdirsSync(outputDir);

    // ビルド
    command(`cd ../${dir} && npm run build`);

    // ファイルのコピー
    copyDir.sync(`../${dir}/dist`, `./${outputDir}`);

    // package.jsonのコピー
    fs.copySync(`../${dir}/package.json`, `./${outputDir}/package.json`);

    // npm install & ビルド
    command(`cd ./${outputDir} && npm install --production`);

    // 不要なファイルを削除する
    fs.unlinkSync(`./${outputDir}/package.json`);
    fs.unlinkSync(`./${outputDir}/package-lock.json`);
}

/**
 * Web APIのビルド
 */
function webAPI(): void {
    const dir = 'backend/webAPI';
    const outputDir = `${OUTPUT_DIR}/${dir}`;

    // 作業ディレクトリの削除
    rimraf.sync(outputDir);

    // 作業ディレクトリの作成
    fs.mkdirsSync(outputDir);

    // ビルド
    command(`cd ../${dir} && npm run build`);

    // ファイルのコピー
    copyDir.sync(`../${dir}/dist`, `./${outputDir}`);

    // package.jsonのコピー
    fs.copySync(`../${dir}/package.json`, `./${outputDir}/package.json`);

    // npm install & ビルド
    command(`cd ./${outputDir} && npm install --production`);

    // 不要なファイルを削除する
    fs.unlinkSync(`./${outputDir}/package.json`);
    fs.unlinkSync(`./${outputDir}/package-lock.json`);
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
