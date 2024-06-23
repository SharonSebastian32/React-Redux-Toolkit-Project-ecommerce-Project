import { Fragment } from "react";
import Header from "../src/components/Header/Header";
import {ProductList} from "./components/ProductList/ProductList";
 
function App() {

  return (
    <Fragment>

      <Header />
      <ProductList />
      
    </Fragment>
  );

}

export default App;
