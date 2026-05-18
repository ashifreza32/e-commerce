import { createContext } from 'react'
import { products as initialProducts } from '../assets/assets'

export const ShopContext = createContext({
  products: [],
})

export const shopContextValue = {
  products: initialProducts,
}
