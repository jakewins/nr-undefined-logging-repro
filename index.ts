import 'newrelic';

import winston from 'winston';

export function createLogger(): winston.Logger {
    return winston.createLogger({
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(winston.format.errors({ stack: true }), winston.format.timestamp())
            })
        ]
    });
}

(async () => {
    const logger = createLogger();
    logger.info('Hello, world!');
})();
