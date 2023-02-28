import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react'
import { LOGIN_USER } from '../graphQl/mutation';

const Login = () => {
    const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
    const router = useRouter()

    const onSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (email && password) {
            loginUser({
                variables: {
                    userSignIn: {
                        email: email,
                        password: password,
                    }
                },
                onCompleted: (data) => {
                    localStorage.setItem('token', data.signinUser.token)
                    router.replace('/')
                }
            })
        }
    }

    return (
        <div className='flex items-center justify-center w-screen h-screen min-w-[300px] min-h-[600px] bg-gray-900'>
            <form className='flex flex-col px-12 py-8 bg-white rounded-xl' onSubmit={onSubmit}>
                <h2 className='font-semibold text-lg text-center'>Login</h2>
                <hr className='w-[80%] mx-auto mt-2' />
                {error && <p className='text-center mt-3 text-sm text-red-500'>{error.message}</p>}
                <label className='mt-6 mb-2' htmlFor="email">Email</label>
                <input className='h-12 w-[350px] bg-transparent outline-none shadow px-2 rounded text-sm' id='email' name='email' type="email" placeholder='Enter your Email' />
                <label className='mt-6 mb-2' htmlFor="password">Password</label>
                <input className='h-12 w-[350px] bg-transparent outline-none shadow px-2 rounded text-sm' name='password' id='password' type="password" placeholder='Password' />
                <button className='bg-gray-300 hover:bg-gray-200 py-3 rounded-xl mt-8'>{loading ? 'loding...' : 'Submit'}</button>
                <div className='text-sm text-center mt-8'>Dont't have accout ? <button type='button' onClick={() => router.replace('/signup')} className='text-blue-500 underline' href='/signup'>Create New Accout</button></div>
            </form>
        </div>
    )
}

export default Login