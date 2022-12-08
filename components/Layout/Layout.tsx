import React, { ReactNode } from 'react'
import NavBar from './NavBar'

const Layout = ({ children }: any) => {
  return (
    <div className="flex bg-background-normal h-full overflow-auto">
      <NavBar/>
      
      <div className="w-100 flex justify-center p-7">
        {children}
      </div>
    </div>
  )
}

export default Layout