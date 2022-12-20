import React, { ReactNode } from 'react'
import NavBar from './NavBar'

const Layout = ({ children }: any) => {
  return (
    <div className='flex bg-hogwarts min-h-screen w-full bg-cover bg-center'>
      <div className="flex w-full h-full backdrop-blur-md">
        <NavBar />
        <div className='w-full min-h-screen p-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout