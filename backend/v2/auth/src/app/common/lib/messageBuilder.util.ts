import { ResponseDto } from "../dto/response.dto";
import { ResponseMethod, ExtractResponseMethod } from "./response.util";

export class MessageBuilder {
  constructor(private entityName: string) {}

  private getName({ plurals = false, upper = false } = {}): string {
    let name = this.entityName;
    if (plurals) name += "s";
    if (upper) name = name.toUpperCase();
    return name;
  }

  build<Method extends ResponseMethod>(
    method: Method,
    options?: ExtractResponseMethod<Method>
  ): string {
    switch (method) {
      case ResponseMethod.findOne:
        if (!options || !options.id) {
          throw new Error("ID is required for findOne method");
        }
        return `Get ${this.getName()} by id ${options.id} successfully`;
      case ResponseMethod.findAll:
        return `Get ${this.getName({ plurals: true })} successfully`;
      case ResponseMethod.create:
        return `${this.getName({
          plurals: true,
          upper: true,
        })} created successfully`;
      case ResponseMethod.update:
        if (!options || !options.id) {
          throw new Error("ID is required for update method");
        }
        return `Updated ${this.getName()} by id ${options.id} successfully`;
      case ResponseMethod.remove:
        if (!options || !options.id) {
          throw new Error("ID is required for remove method");
        }
        return `Deleted ${this.getName()} by id ${options.id} successfully`;
      default:
        throw new Error("Invalid response method");
    }
  }
}

export function createResponse<T>(
  statusCode: number,
  message: string,
  data?: T
): ResponseDto<T> {
  return { statusCode, message, data };
}
