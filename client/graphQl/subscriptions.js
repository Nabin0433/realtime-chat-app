
import { gql } from '@apollo/client'


const subscribeMessage = gql`
    subscription Subscription {
        newMessage {
        id
        text
        receiverId
        senderId
        createAt
        }
    }
`
export {
    subscribeMessage
}