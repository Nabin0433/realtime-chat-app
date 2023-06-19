"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_js_1 = __importDefault(require("./database.js"));
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubsub = new graphql_subscriptions_1.PubSub();
const NEW_MESSAGE = "NEW_MESSAGE";
const resolvers = {
    Query: {
        users: async (_, args, { userId }) => {
            if (!userId)
                throw new apollo_server_1.ForbiddenError('user need to login');
            const user = await database_js_1.default.user.findMany({ where: { NOT: { id: userId } } });
            return user;
        },
        messageByUser: async (_, { receiverId }, { userId }) => {
            if (!userId)
                throw new apollo_server_1.ForbiddenError('user need to login to send a message');
            const messages = await database_js_1.default.message.findMany({
                where: {
                    OR: [
                        {
                            senderId: userId, receiverId: receiverId
                        },
                        {
                            senderId: receiverId, receiverId: userId
                        }
                    ]
                },
                orderBy: {
                    createAt: "asc"
                }
            });
            return messages;
        },
        me: async (_, args, { userId }) => {
            if (!userId)
                throw new apollo_server_1.ForbiddenError('user need to login');
            const me = await database_js_1.default.user.findUnique({ where: { id: userId } });
            return me;
        }
    },
    Mutation: {
        signupUser: async (_, { userNew }) => {
            var _a;
            const user = await database_js_1.default.user.findUnique({ where: { email: userNew.email } });
            if (user)
                throw new apollo_server_1.AuthenticationError("user already exist with that email");
            const hashadPassword = await bcryptjs_1.default.hash(userNew.password, 4);
            const newUser = await database_js_1.default.user.create({
                data: Object.assign(Object.assign({}, userNew), { password: hashadPassword })
            });
            const token = jsonwebtoken_1.default.sign({ userId: newUser.id }, (_a = process.env.jwtSecret) !== null && _a !== void 0 ? _a : '');
            return { token };
        },
        signinUser: async (_, { userSignIn }) => {
            var _a;
            const user = await database_js_1.default.user.findUnique({ where: { email: userSignIn.email } });
            if (!user)
                throw new apollo_server_1.AuthenticationError("invalid user credentials");
            const isMatch = await bcryptjs_1.default.compare(userSignIn.password, user.password);
            if (!isMatch)
                throw new apollo_server_1.AuthenticationError("invalid user credentials");
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, (_a = process.env.jwtSecret) !== null && _a !== void 0 ? _a : '');
            return { token };
        },
        createMessage: async (_, { receiverId, text }, { userId }) => {
            if (!userId)
                throw new apollo_server_1.ForbiddenError('user need to login to send a message');
            if (!receiverId)
                throw new apollo_server_1.ForbiddenError('receiver cant be null');
            if (!text)
                throw new apollo_server_1.ForbiddenError('message cant be empty');
            const message = await database_js_1.default.message.create({
                data: {
                    text,
                    receiverId,
                    senderId: userId,
                }
            });
            pubsub.publish(NEW_MESSAGE, { newMessage: message });
            return message;
        },
    },
    Subscription: {
        newMessage: {
            subscribe: () => pubsub.asyncIterator(NEW_MESSAGE)
        }
    }
};
exports.default = resolvers;
