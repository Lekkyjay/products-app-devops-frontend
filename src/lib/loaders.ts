import type { LoaderFunction, LoaderFunctionArgs } from 'react-router'
import { fetchCategoriesForAwait, getProductDetails, getProducts } from './services'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const productsLoader: LoaderFunction = async () => {
  await sleep(1000)
  return { products: await getProducts() }
}


export const fetchProductById: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const id = params.productId
  return { product: await getProductDetails(id as string) }
}

export async function categoriesLoader() {
  await sleep(1000)
  const categoriesPromise = fetchCategoriesForAwait()  
  return { categoriesPromise }  
}
