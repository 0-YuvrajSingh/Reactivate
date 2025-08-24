import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams();
  return (
    <div className='bg-orange-700 text-2xl font-semibold text-black justify-center items-center flex h-screen' >User: {userId}</div>
  )
}

export default User