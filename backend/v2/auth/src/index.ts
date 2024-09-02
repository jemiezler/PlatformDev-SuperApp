import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import {
  createResponse,
  MessageBuilder,
} from "./app/common/lib/messageBuilder.util";
import { ResponseMethod } from "./app/common/lib/response.util";
import { StatusCodes } from "http-status-codes";

const app = new Elysia();

app.use(swagger());

app.get("/", () => {
  const messageBuilder = new MessageBuilder("Example");
  const message = messageBuilder.build(ResponseMethod.findAll);
  console.log("Message:", message);
  console.log("Message Type:", typeof message);
  const response = createResponse(StatusCodes.OK, message, {
    user: "Hello Elysia",
  });
  console.log("Response:", response);
  return response;
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
