import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import jwt from 'jsonwebtoken';
import express from 'express'
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws'

const port = process.env.PORT || 8080;

const app = express()

const context = ({ req }: { req: express.Request }) => {
    const { authorization } = req.headers;
    if (authorization) {
        const { userId } = jwt.verify(authorization, process.env.jwtSecret ?? '') as any;
        return { userId }
    } else {
        return null
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const apolloServer = new ApolloServer({ schema, context })

const startServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });

    const server = app.listen(port, () => {
        const wsServer = new WebSocketServer({
            server,
            path: '/graphql',
        });
        useServer({ schema }, wsServer);
        console.log('Apollo server is running on port 8080');
    });
};

startServer();