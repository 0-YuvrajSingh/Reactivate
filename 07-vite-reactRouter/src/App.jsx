import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green-500 justify-center items-center flex h-screen'>
        <h1 className='text-white'>Hello World</h1>
      </div>
    </>
  )
}

export default App
