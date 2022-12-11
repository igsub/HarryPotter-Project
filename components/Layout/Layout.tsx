import React, { ReactNode } from 'react'
import NavBar from './NavBar'

const Layout = ({ children }: any) => {
  return (
    <div className='flex bg-background-normal'>
      <NavBar />
      <div className='w-full p-4'>
        {children}
      </div>
    </div>
  )
}

export default Layout