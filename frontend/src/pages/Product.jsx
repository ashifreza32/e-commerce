import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.js'

const Product = () => {
  const { id } = useParams()
  const { products } = useContext(ShopContext)
  const productData = products?.find((item) => item._id === id || item.id === id) ?? null

  return (
    <div>
      {productData ? (
        <div>
          <h1>{productData.name}</h1>
          <p>{productData.description}</p>
          <p>Price: ${productData.price}</p>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  )
}

export default Product
