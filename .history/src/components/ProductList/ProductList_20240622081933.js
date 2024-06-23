 import products from '../../api/products.json'
import { BeforeCart } from './CartButtons/BeforeCart'
import { AfterCart } from './CartButtons/AfterCart'
 import { useSelector } from 'react-redux'
import '../ProductList/ProductList.css'

  const ProductList = () => {
      
  const { cartCount } = useSelector((state) => state.cart);

  
   
  return (
    <section className='container'>

      {
        products?.map((products, key) => (
          <div className='product-container' key={key}>


            <img src={products?.image} alt=''></img>
            <h3>{products?.name}</h3>

            {cartCount > 0 ? <AfterCart/> : <BeforeCart/> }

             
            
              
          </div>
        ))
      }

    </section>
  )
}

export default ProductList;