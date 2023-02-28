import { useLazyQuery, useMutation, useQuery, useSubscription } from '@apollo/client'
import React, { useEffect, useRef, useState } from 'react'
import TimeAgo from "timeago-react"
import Nav from '../components/Nav'
import { SEND_MESSAGE } from '../graphQl/mutation'
import { GET_ALL_USERS, GET_MESSAGES, ME } from '../graphQl/qurey'
import { timeStampConveterTotimeAgoPackage } from '../utils/utils'
import { useRouter } from 'next/router'
import { subscribeMessage } from '../graphQl/subscriptions'


const index = () => {
  const [messages, setMessages] = useState([])
  const [activeChat, setActiveChat] = useState(null)
  const [message, setMessage] = useState('')
  const [profile, setProfile] = useState('')
  const chatContainer = useRef(null)
  const router = useRouter()

  const { loading: usersLoding, error: err1, data: userData } = useQuery(GET_ALL_USERS);
  const [getProfile] = useLazyQuery(ME, {
    onCompleted: (data) => {
      setProfile(data.me)
    }
  });
  const [getMessages, { loading: messagesLoading, error: err2, data: initMessages, refetch: refetchMessages }] = useLazyQuery(GET_MESSAGES);
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onCompleted(data) {
      setMessages(old => [...old, data.createMessage])
    }
  });

  useSubscription(subscribeMessage, {
    onSubscriptionData: (data) => {
      const receivedMessage = data.subscriptionData.data.newMessage;
      if (receivedMessage.senderId === activeChat.id) {
        setMessages(old => [...old, data.subscriptionData.data.newMessage])
      }
    }
  })

  useEffect(() => {
    getToken()
  }, [])


  useEffect(() => {
    if (userData?.users?.[0]) {
      setActiveChat(userData.users[0])
      getMessages({
        variables: {
          receiverId: userData.users[0].id
        }
      })
    }
  }, [userData])


  useEffect(() => {
    if (initMessages?.messageByUser) {
      setMessages(initMessages.messageByUser)
    }
  }, [initMessages])

  useEffect(() => {
    if (chatContainer.current) {
      const el = chatContainer.current;
      el.scrollTop = el.scrollHeight;
    }
  }, [chatContainer.current, messages])

  const getToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/login')
    } else {
      getProfile()
    }
  }

  const chatClick = (item) => {
    setActiveChat(item)
    refetchMessages({
      receiverId: item.id
    })
  }

  const submitChat = (e) => {
    e.preventDefault()
    sendMessage({
      variables: {
        receiverId: activeChat.id,
        text: message,
      }
    })
    setMessage('')
  }

  return (
    <div className=''>
      <Nav />
      <div className='flex justify-between'>
        <div className='hidden lg:block min-w-[400px] max-w-[400px] bg-primary min-h-[640px] space-y-2 overflow-scroll h-[88vh] pb-20 mt-2 pt-1'>
          {userData?.users?.map(user => (
            <UserCard key={user.id} user={user} active={true} onClick={chatClick} />
          ))}
          {usersLoding && <CustomLoading />}
        </div>
        <div className='w-full h-[90vh] min-h-[660px] py-2 px-1 lg:px-4 flex items-center justify-center'>
          <div className='w-full h-full bg-primary rounded-xl'>
            {messagesLoading && <CustomLoading />}
            {activeChat && !messagesLoading && (
              <>
                {/* header */}
                <ChatBoxHeader name={activeChat?.name} />
                {/* body */}
                <div className='w-full h-[84%] flex flex-col justify-between items-center px-4 lg:px-8'>
                  <div ref={chatContainer} className='w-full h-full overflow-scroll py-16 my-2 space-y-2'>
                    {messages?.map(chat => (
                      <ChatBox key={chat.id} message={chat.text} isMe={chat.senderId === profile?.id} time={chat.createAt} />
                    ))}
                  </div>
                  {/* forn inputs */}
                  <form autocomplete="off" onSubmit={submitChat} className='w-full h-[80px] rounded-3xl bg-secondary flex items-center justify-between px-4 lg:px-8'>
                    <div className='w-20'>
                      <img className='cursor-pointer hover:opacity-80' src="add.svg" alt="add" />
                    </div>
                    {/*  */}
                    <div className='w-full'>
                      <input
                        className='w-full h-[50px] bg-transparent outline-none placeholder:text-chat'
                        type="text"
                        name='message'
                        placeholder='Type a message here'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        autoComplete='off'
                      />
                    </div>
                    {/*  */}
                    <div className='flex items-center w-40'>
                      <img className='w-12 object-cover cursor-pointer hover:opacity-80' src="emoji.svg" alt="emoji" />
                      <button><img className='w-28 cursor-pointer hover:opacity-80' src="send.svg" alt="send" /></button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

const UserCard = ({ active, user, onClick }) => {
  return (
    <div className={`flex bg-secondary space-x-3 px-6 py-4 items-center cursor-pointer rounded hover:px-2 ${active && 'px-2 shadow-xl'}`} onClick={() => onClick(user)}>
      <div className='w-32 h-20'>
        <img className='w-20 h-20 rounded-full object-cover' src={`https://api.dicebear.com/5.x/adventurer/svg?seed=Felix${user.name}`} alt={user.name} />
      </div>
      <div className='w-full'>
        <div className='flex justify-between item-start'>
          <h2 className='text-userName font-semibold text-lg'>{user.name}</h2>
          <TimeAgo className='text-sm font-medium text-gray-500' datetime={timeStampConveterTotimeAgoPackage(user.createAt)} />
        </div>
        <p className='text-userBio truncate w-60'>{user.bio}</p>
      </div>
    </div>
  )
}

const ChatBox = ({ isMe, message, time }) => {
  return (
    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} w-full`}>
      <div className='space-y-2'>
        <TimeAgo
          className='text-gray-400'
          datetime={timeStampConveterTotimeAgoPackage(time)}
        />
        <div className={`max-w-[300px] lg:max-w-[400px] p-5 rounded-2xl ${isMe ? 'rounded-br-[0px] bg-white' : 'rounded-tl-[0px] bg-secondary'}`}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

const ChatBoxHeader = ({ name }) => {
  return (
    <div className='w-full h-[12%] bg-secondary flex items-center space-x-2 px-8 py-3 rounded-t-xl'>
      <div className='w-20'>
        <img className='w-16 rounded-full object-cover' src={`https://api.dicebear.com/5.x/adventurer/svg?seed=Felix${name}`} alt="profile" />
      </div>
      <h2 className='text-userName font-semibold text-lg'>{name}</h2>
    </div>
  )
}

const CustomLoading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <p className='animate-spin rounded-full border-4 border-t-white border-b-green-100 w-8 h-8'></p>
    </div>
  )
}