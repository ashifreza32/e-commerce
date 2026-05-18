import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.js'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)

  console.log(products)

  return <div />
}

export default LatestCollection

