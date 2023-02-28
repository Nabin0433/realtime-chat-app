import { gql } from '@apollo/client'


const ME = gql`
    query Me {
        me {
        id
        name
        email
        createAt
        bio
        }
    }
`

const GET_ALL_USERS = gql`
    query Users {
        users {
        id
        name
        email
        createAt
        }
    }
`

const GET_MESSAGES = gql`
    query MessageByUser($receiverId: ID!) {
        messageByUser(receiverId: $receiverId) {
        id
        text
        receiverId
        senderId
        createAt
        }
    }
`

export {
    ME,
    GET_ALL_USERS,
    GET_MESSAGES
}