import { Builder } from '../../lib/builder';
export declare class ResponseDto<T> {
    statusCode: number;
    message: string;
    data?: T;
}
export declare function ResponseBuilder<T>(statusCode: number, message: string, data?: T): ResponseDto<T>;
export declare enum ResponseMethod {
    findOne = "findOne",
    findAll = "findAll",
    create = "create",
    update = "update",
    remove = "remove"
}
type ResponseParamsMap = {
    [ResponseMethod.findOne]: {
        id: string;
    };
    [ResponseMethod.update]: {
        id: string;
    };
    [ResponseMethod.remove]: {
        id: string;
    };
};
export type ExtractResponseMethod<T extends ResponseMethod> = T extends keyof ResponseParamsMap ? ResponseParamsMap[T] : never;
export declare class MessageBuilder extends Builder {
    build<Method extends ResponseMethod>(method: Method, options?: ExtractResponseMethod<Method>): string;
}
export {};
