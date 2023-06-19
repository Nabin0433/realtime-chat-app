import { AuthenticationError, ForbiddenError } from 'apollo-server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import prisma from './database.js'
import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()

const NEW_MESSAGE = "NEW_MESSAGE"

const resolvers = {
    Query: {
        users: async (_: any, args: any, { userId }: { userId: string }) => {
            if (!userId) throw new ForbiddenError('user need to login');
            const user = await prisma.user.findMany({ where: { NOT: { id: userId } } })
            return user;
        },
        messageByUser: async (_: any, { receiverId }: { receiverId: string }, { userId }: { userId: string }) => {
            if (!userId) throw new ForbiddenError('user need to login to send a message');
            const messages = await prisma.message.findMany({
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
        me: async (_: any, args: any, { userId }: { userId: any }) => {
            if (!userId) throw new ForbiddenError('user need to login');
            const me = await prisma.user.findUnique({ where: { id: userId } })
            return me;
        }
    },
    Mutation: {
        signupUser: async (_: any, { userNew }: { userNew: any }) => {
            const user = await prisma.user.findUnique({ where: { email: userNew.email } })
            if (user) throw new AuthenticationError("user already exist with that email")
            const hashadPassword = await bcrypt.hash(userNew.password, 4)
            const newUser = await prisma.user.create({
                data: { ...userNew, password: hashadPassword }
            })
            const token = jwt.sign({ userId: newUser.id }, process.env.jwtSecret ?? '')
            return { token };
        },
        signinUser: async (_: any, { userSignIn }: { userSignIn: any }) => {
            const user = await prisma.user.findUnique({ where: { email: userSignIn.email } })
            if (!user) throw new AuthenticationError("invalid user credentials")
            const isMatch = await bcrypt.compare(userSignIn.password, user.password)
            if (!isMatch) throw new AuthenticationError("invalid user credentials")
            const token = jwt.sign({ userId: user.id }, process.env.jwtSecret ?? '')
            return { token };
        },
        createMessage: async (_: any, { receiverId, text }: { receiverId: any, text: any }, { userId }: { userId: any }) => {
            if (!userId) throw new ForbiddenError('user need to login to send a message');
            if (!receiverId) throw new ForbiddenError('receiver cant be null');
            if (!text) throw new ForbiddenError('message cant be empty');
            const message = await prisma.message.create({
                data: {
                    text,
                    receiverId,
                    senderId: userId,
                }
            })
            pubsub.publish(NEW_MESSAGE, { newMessage: message })
            return message
        },
    },
    Subscription: {
        newMessage: {
            subscribe: () => pubsub.asyncIterator(NEW_MESSAGE)
        }
    }
}

export default resolvers;