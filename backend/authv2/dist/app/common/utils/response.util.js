"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBuilder = exports.ResponseMethod = exports.ResponseDto = void 0;
exports.ResponseBuilder = ResponseBuilder;
const builder_1 = require("../../lib/builder");
class ResponseDto {
}
exports.ResponseDto = ResponseDto;
function ResponseBuilder(statusCode, message, data) {
    return {
        statusCode,
        message,
        data,
    };
}
var ResponseMethod;
(function (ResponseMethod) {
    ResponseMethod["findOne"] = "findOne";
    ResponseMethod["findAll"] = "findAll";
    ResponseMethod["create"] = "create";
    ResponseMethod["update"] = "update";
    ResponseMethod["remove"] = "remove";
})(ResponseMethod || (exports.ResponseMethod = ResponseMethod = {}));
class MessageBuilder extends builder_1.Builder {
    build(method, options) {
        switch (method) {
            case ResponseMethod.findOne:
                return `Get - ${this.getName()} by id ${options.id}`;
            case ResponseMethod.findAll:
                return `Get - ${this.getName({ purals: true })}`;
            case ResponseMethod.create:
                return `Created - ${this.getName({ purals: false, upper: true })} `;
            case ResponseMethod.update:
                return `Updated - ${this.getName()} by id ${options.id}`;
            case ResponseMethod.remove:
                return `Deleted - ${this.getName()} by id ${options.id}`;
            default:
                throw new Error('Invalid error method');
        }
    }
}
exports.MessageBuilder = MessageBuilder;
//# sourceMappingURL=response.util.js.map