 import products from '../../api/products.json'
 
 import { useSelector } from 'react-redux'
import '../ProductList/ProductList.css'
import CartButtons from './CartButtons'

  const ProductList = () => {
      
  const {cartList} = useSelector((state) => state.cart);

  
    console.log(cartList);
  return (
    <section className='container'>

      {
        products?.map((products, key) => (
          <div className='product-container' key={key}>


            <img src={products?.image} alt=''></img>

            <h3>{products?.name}</h3>

 
            <CartButtons productID={products.id} />
            
              
          </div>
        ))
      }

    </section>
  )
}

export default ProductList;