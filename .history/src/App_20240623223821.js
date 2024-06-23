import { Fragment, useEffect } from "react";
import Header from "../src/components/Header/Header";
import { ProductList } from "./components";
import { useDispatch } from "react-redux";
 
function App() {

  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(fetchUser())
  }, []);

  return (
    <Fragment>

      <Header />
      <ProductList />
      
    </Fragment>
  );

}

export default App;
