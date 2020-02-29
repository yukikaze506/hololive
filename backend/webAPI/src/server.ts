import { GlobalErrorHandlerMiddleware, ServerLoader, ServerSettings } from '@tsed/common';
import '@tsed/swagger';
import * as cors from 'cors';
import { GlobalAcceptMimesMiddleware } from './middlewares/globalAcceptMimeMiddleware';

const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const rootDir = __dirname;

/**
 * CORSの設定
 */
const corsOptions: cors.CorsOptions = {
    origin: true, // 本番環境はAPI Gatewayで制御する
    optionsSuccessStatus: 200
};

@ServerSettings({
    rootDir,
    httpsPort: false,
    acceptMimes: [
        // 'application/javascript',
        'application/json'
        // 'application/octet-stream',
        // 'application/xml',
        // 'font/eot',
        // 'font/opentype',
        // 'font/otf',
        // 'image/jpeg',
        // 'image/png',
        // 'image/svg+xml',
        // 'text/comma-separated-values',
        // 'text/css',
        // 'text/html',
        // 'text/javascript',
        // 'text/plain',
        // 'text/text',
        // 'text/xml'
    ],
    mount: {
        '/api': [`${rootDir}/controllers/**/*.ts`]
    },
    componentsScan: [`${rootDir}/middlewares/**/*.ts`, `${rootDir}/services/**/*.ts`, `${rootDir}/converters/**/*.ts`],
    swagger: {
        path: '/api-docs'
    }
})
export class Server extends ServerLoader {
    /**
     * This method let you configure the middleware required by your application to works.
     * @returns {Server}
     */
    $beforeRoutesInit(): void | Promise<any> {
        this.use(GlobalAcceptMimesMiddleware)
            .use(GlobalErrorHandlerMiddleware)
            .use(cors.default(corsOptions))
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(
                bodyParser.urlencoded({
                    extended: true
                })
            );
        this.set('trust proxy', true); // trust first proxy
    }
}
