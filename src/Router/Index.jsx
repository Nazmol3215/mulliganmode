

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../ProdacutDetails/Index";
import Navbar from "../Layout/Nabar";
import Footer from "../Layout/Footer";
import AllPages from "./AllPages";
import ProductPage from "../OrderDetails/OrderDetails";
import OrderComponent from "../OrderDetails/OrderComponent";




function Index() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/ProductDetails" element={<ProductDetails/>}></Route> 
  <Route path="/" element={<AllPages/>}></Route> 
  <Route path="/ProductPage" element={<ProductPage/>}></Route> 
  <Route path="/OrderComponent" element={<OrderComponent/>}></Route> 
</Routes>
<Footer/>
</BrowserRouter>

    </>
  )
}
export default Index;

