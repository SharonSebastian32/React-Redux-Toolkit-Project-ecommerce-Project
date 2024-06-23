 import products from '../../api/products.json'
import { BeforeCart } from './CartButtons/BeforeCart'
import { AfterCart } from './CartButtons/AfterCart'
 import { useSelector } from 'react-redux'
import '../ProductList/ProductList.css'

  const ProductList = () => {
      
  const { cartCount, cartList} = useSelector((state) => state.cart);

  
    console.log(cartList);
  return (
    <section className='container'>

      {
        products?.map((products, key) => (
          <div className='product-container' key={key}>


            <img src={products?.image} alt=''></img>
            <h3>{products?.name}</h3>

            {cartCount > 0 ? <AfterCart /> : <BeforeCart products={products} /> }

             
            
              
          </div>
        ))
      }

    </section>
  )
}

export default ProductList;