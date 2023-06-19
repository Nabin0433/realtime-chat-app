export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
};
export type Message = {
    __typename?: 'Message';
    createAt: Scalars['Date'];
    id: Scalars['ID'];
    receiverId: Scalars['ID'];
    senderId: Scalars['ID'];
    text: Scalars['String'];
};
export type Mutation = {
    __typename?: 'Mutation';
    createMessage?: Maybe<Message>;
    signinUser?: Maybe<Token>;
    signupUser?: Maybe<User>;
};
export type MutationCreateMessageArgs = {
    receiverId: Scalars['ID'];
    text: Scalars['String'];
};
export type MutationSigninUserArgs = {
    userSignIn: SigninInput;
};
export type MutationSignupUserArgs = {
    userNew: SignupInput;
};
export type Query = {
    __typename?: 'Query';
    messageByUser?: Maybe<Array<Maybe<Message>>>;
    users?: Maybe<Array<Maybe<User>>>;
};
export type QueryMessageByUserArgs = {
    receiverId: Scalars['ID'];
};
export type SigninInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export type SignupInput = {
    email: Scalars['String'];
    name: Scalars['String'];
    password: Scalars['String'];
};
export type Token = {
    __typename?: 'Token';
    token: Scalars['String'];
};
export type User = {
    __typename?: 'User';
    createAt: Scalars['Date'];
    email: Scalars['String'];
    id: Scalars['ID'];
    name: Scalars['String'];
};
