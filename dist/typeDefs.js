"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `

 scalar Date 

 type Query {
    users:[User]
    messageByUser(receiverId:ID!):[Message]
    me:User
 }

 input SignupInput{
    name: String!
    email: String!
    password: String!
    bio: String!
 }

 input SigninInput{
    email: String!
    password: String!
 }

 type Message{
   id: ID!
   text: String!
   receiverId: ID!
   senderId: ID!
   createAt: Date!
}

 type Mutation {
    signupUser(userNew:SignupInput!):Token
    signinUser(userSignIn:SigninInput!):Token
    createMessage(receiverId:ID! text:String!):Message
 }

 type Token {
    token : String!
 }

 type User {
    id: ID!
    name: String!
    email: String!
    createAt: Date!
    bio: String!
 }
 type Subscription {
   newMessage:Message
 }
`;
exports.default = typeDefs;
