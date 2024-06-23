import { Fragment, useEffect } from "react";
import Header from "../src/components/Header/Header";
import { ProductList } from "./components";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./Redux/cart";
import { response } from "express";
 
function App() {

  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(fetchUsers())
  }, []);
  console.log(response)

  return (
    <Fragment>

      <Header />
      <ProductList />
      
    </Fragment>
  );

}

export default App;
