import { useEffect, useState } from 'react'

export default function Home() {
  const API_URL = import.meta.env.VITE_API_URL || '/api'
  const [data, setData] = useState('')

  const getHostName = async () => {
    try {
      const response = await fetch(`${API_URL}/hostname`)
      const data = await response.json()
      setData(data)
      console.log(data)
    } 
    catch (error) {
      console.log('Error response:', error)
    }
  }

  useEffect(() => {
    getHostName()
  }, [])

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Welcome to the Product Management App!!!!!!!</h2>
      <p className="mt-4 text-lg">Manage your products and categories efficiently.</p>
      <p>API URL: <b>{API_URL}</b></p>
      <p>Host Name: <b>{data || 'Unknown Host'}</b></p>
    </div>
  )
}