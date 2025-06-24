// const API_URL = import.meta.env.VITE_API_URL || '/api'

declare global {
  interface Window {
    env?: { [key: string]: string }
  }
}

export const API_URL = window.env?.VITE_API_URL || import.meta.env.VITE_API_URL
export const CONFIG_VAR = window.env?.CONFIG_VAR || 'Config-var unknown'
export const CONFIG_VAR1 = window.env?.CONFIG_VAR1 || 'Config-var1 unknown'
export const CONFIG_VAR2 = window.env?.CONFIG_VAR2 || 'Config-var2 unknown'

export async function getProducts() {  
  const res = await fetch(API_URL + '/products')
  if (!res.ok) {
    throw {
      message: 'Failed to fetch products', 
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

export async function getProductDetails(id: string) {
  const res = await fetch(API_URL + '/products/' + id)
  if (!res.ok) {  
    throw {
      message: 'Failed to fetch product details', 
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

export async function fetchCategoriesForAwait() {    
  try {
    const res = await fetch(API_URL + '/categories')
    if (!res.ok) {
      return { __error: new Error(`Failed to fetch categories: ${res.status}`) };
    }
    const data = await res.json()
    return data
  } 
  catch (err) {
    return { __error: err instanceof Error ? err : new Error('Unknown error') };
  }
}
