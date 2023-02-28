import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react'
import { REGISTER_USER } from '../graphQl/mutation';

const Signup = () => {
    const [register, { loading, error }] = useMutation(REGISTER_USER);
    const router = useRouter()

    const onSubmit = (e) => {
        e.preventDefault()
        const name = e.target.password.value
        const bio = e.target.password.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (email && password) {
            register({
                variables: {
                    userNew: {
                        name: name,
                        bio: bio,
                        email: email,
                        password: password,
                    }

                },
                onCompleted: (data) => {
                    localStorage.setItem('token', data.signupUser.token)
                    router.replace('/')
                }
            })
        }
    }

    return (
        <div className='flex items-center justify-center w-screen h-screen min-w-[300px] min-h-[700px] bg-gray-900'>
            <form className='flex flex-col px-12 py-8 bg-white rounded-xl' onSubmit={onSubmit}>
                <h2 className='font-semibold text-lg text-center'>Signup</h2>
                <hr className='w-[80%] mx-auto mt-2' />
                {error && <p className='text-center mt-3 text-sm text-red-500'>{error.message}</p>}
                <label className='mt-6 mb-2' htmlFor="name">Name</label>
                <input className='h-12 w-[350px] bg-transparent outline-none shadow px-2 rounded text-sm' id='name' name='name' type="text" placeholder='Enter your fullname' />
                <label className='mt-6 mb-2' htmlFor="bio">Bio</label>
                <input className='h-12 w-[350px] bg-transparent outline-none shadow px-2 rounded text-sm' id='bio' name='bio' type="text" placeholder='About your self' />
                <label className='mt-6 mb-2' htmlFor="email">Email</label>
                <input className='h-12 w-[350px] bg-transparent outline-none shadow px-2 rounded text-sm' id='email' name='email' type="email" placeholder='Enter your Email' />
                <label className='mt-6 mb-2' htmlFor="password">Password</label>
                <input className='h-12 w-[350px] bg-transparent outline-none shadow px-2 rounded text-sm' name='password' id='password' type="password" placeholder='Password' />
                <button className='bg-gray-300 hover:bg-gray-200 py-3 rounded-xl mt-8'>{loading ? 'loding...' : 'Submit'}</button>
                <p className='text-sm text-center mt-8'>Already have an account? <button type='button' onClick={() => router.replace('/login')} className='text-blue-500 underline' href='/login'>Login</button></p>
            </form>
        </div>
    )
}

export default Signup