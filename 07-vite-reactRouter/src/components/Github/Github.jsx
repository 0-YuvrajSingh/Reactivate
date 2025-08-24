import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div>Github Bio : {data.bio}</div>
  )
}

export default Github