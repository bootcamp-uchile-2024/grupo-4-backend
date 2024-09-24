"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralMiddleware = void 0;
const common_1 = require("@nestjs/common");
let GeneralMiddleware = class GeneralMiddleware {
    use(req, res, next) {
        console.log("---Middleware General---");
        console.log('Path:' + req.originalUrl);
        console.log('Method:' + req.method);
        if (req.body) {
            console.log(req.body);
        }
        next();
    }
};
exports.GeneralMiddleware = GeneralMiddleware;
exports.GeneralMiddleware = GeneralMiddleware = __decorate([
    (0, common_1.Injectable)()
], GeneralMiddleware);
//# sourceMappingURL=general.middleware.js.map