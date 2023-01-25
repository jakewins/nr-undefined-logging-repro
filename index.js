"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
const tslib_1 = require("tslib");
require("newrelic");
const winston_1 = tslib_1.__importDefault(require("winston"));
function createLogger() {
    return winston_1.default.createLogger({
        transports: [
            new winston_1.default.transports.Console({
                format: winston_1.default.format.combine(winston_1.default.format.errors({ stack: true }), winston_1.default.format.timestamp())
            })
        ]
    });
}
exports.createLogger = createLogger;
(async () => {
    const logger = createLogger();
    logger.info('Hello, world!');
})();
//# sourceMappingURL=index.js.map