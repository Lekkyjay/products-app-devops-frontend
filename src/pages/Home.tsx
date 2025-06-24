import { useEffect, useState } from 'react'
import { API_URL, CONFIG_VAR, CONFIG_VAR1, CONFIG_VAR2 } from '../lib/services'

export default function Home() {
  const [data, setData] = useState('')

  console.log('VITE_API_URL............', import.meta.env.VITE_API_URL)
  console.log('API_URL............', API_URL)
  console.log('CONFIG_VAR............', CONFIG_VAR)
  console.log('CONFIG_VAR1............', CONFIG_VAR1)
  console.log('CONFIG_VAR2............', CONFIG_VAR2)

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
      <p>With Dynamic Variable</p>
      <p>API URL: <b>{API_URL}</b></p>
      <p>CONFIG-VAR: <b>{CONFIG_VAR}</b></p>
      <p>CONFIG-VAR1: <b>{CONFIG_VAR1}</b></p>
      <p>CONFIG-VAR2: <b>{CONFIG_VAR2}</b></p>
      <p>Host Name: <b>{data || 'Unknown Host'}</b></p>
    </div>
  )
}