import { useRouter } from 'next/router'
import React from 'react'

const Nav = () => {
    const router = useRouter()

    const logout = () => {
        localStorage.removeItem('token')
        router.reload()
    }
    return (
        <nav className='h-[10vh] bg-primary text-secondary flex justify-between items-center px-4 lg:px-20'>
            <div className='flex items-center space-x-4'>
                <img className='w-20 h-20' src="logo.svg" alt="" />
                <h1 className='text-2xl font-bold text-appName'>My Chat App</h1>
            </div>
            <div className='flex items-center space-x-2'>
                <button className='text-navColor text-lg hover:text-appName' onClick={logout}>Logout</button>
            </div>
        </nav>
    )
}

export default Nav