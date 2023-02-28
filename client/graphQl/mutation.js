import { gql } from '@apollo/client'

const LOGIN_USER = gql`
        mutation SigninUser($userSignIn: SigninInput!) {
            signinUser(userSignIn: $userSignIn) {
                token
            }
        }
`

const REGISTER_USER = gql`
        mutation Mutation($userNew: SignupInput!) {
            signupUser(userNew: $userNew) {
                token
            }
        }
`

const SEND_MESSAGE = gql`
        mutation CreateMessage($receiverId: ID!, $text: String!) {
            createMessage(receiverId: $receiverId, text: $text) {
                id
                text
                receiverId
                senderId
                createAt
            }
        }
`

export {
    REGISTER_USER,
    LOGIN_USER,
    SEND_MESSAGE,
}