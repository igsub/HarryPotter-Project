import { NextApiRequest, NextApiResponse } from 'next'
import { ReactNode } from 'react'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <div className="flex justify-center">
      <h1 className='text-white text-6xl'>Welcome to my Harry Potter App</h1>
    </div>
  )
} 
