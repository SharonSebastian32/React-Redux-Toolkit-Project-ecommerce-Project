import { Fragment, useEffect } from "react";
import Header from "../src/components/Header/Header";
import { ProductList } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Redux/cart";
  
function App() {

  const{userDetails} = useSelector(state=>state.cart)

  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(fetchUsers())
  }, []);
   

  return (
    <Fragment>
      <h2 style={{color:"white"}}> JSO</h2>
      <Header />
      <ProductList />
      
    </Fragment>
  );

}

export default App;
