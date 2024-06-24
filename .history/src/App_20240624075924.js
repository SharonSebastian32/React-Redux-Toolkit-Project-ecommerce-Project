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
       <Header />
      <ProductList />
      
    </Fragment>
  );

}

export default App;
