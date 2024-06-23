import { Fragment, useEffect } from "react";
import Header from "../src/components/Header/Header";
import { ProductList } from "./components";
 
function App() {


  useEffect(
    () => { },[]
  )

  return (
    <Fragment>

      <Header />
      <ProductList />
      
    </Fragment>
  );

}

export default App;
