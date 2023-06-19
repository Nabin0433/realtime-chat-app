"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const schema_1 = require("@graphql-tools/schema");
const ws_1 = require("ws");
const ws_2 = require("graphql-ws/lib/use/ws");
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
const context = ({ req }) => {
    var _a;
    const { authorization } = req.headers;
    if (authorization) {
        const { userId } = jsonwebtoken_1.default.verify(authorization, (_a = process.env.jwtSecret) !== null && _a !== void 0 ? _a : '');
        return { userId };
    }
    else {
        return null;
    }
};
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
const apolloServer = new apollo_server_express_1.ApolloServer({ schema, context });
const startServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    const server = app.listen(port, () => {
        const wsServer = new ws_1.WebSocketServer({
            server,
            path: '/graphql',
        });
        (0, ws_2.useServer)({ schema }, wsServer);
        console.log('Apollo server is running on port 8080');
    });
};
startServer();
