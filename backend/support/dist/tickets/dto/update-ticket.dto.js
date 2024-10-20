"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ticket_dto_1 = require("./create-ticket.dto");
class UpdateTicketDto extends (0, swagger_1.PartialType)(create_ticket_dto_1.CreateTicketDto) {
}
exports.UpdateTicketDto = UpdateTicketDto;
//# sourceMappingURL=update-ticket.dto.js.map