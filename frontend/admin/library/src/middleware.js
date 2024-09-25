"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.middleware = middleware;
var server_1 = require("next/server");
function middleware(request) {
    var accessToken = request.cookies.get("access_token");
    var publicPaths = ["/auth/login", "/auth/register", "/public"];
    if (publicPaths.some(function (path) { return request.nextUrl.pathname.startsWith(path); })) {
        return server_1.NextResponse.next();
    }
    if (!accessToken) {
        return server_1.NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return server_1.NextResponse.next();
}
exports.config = {
    matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
