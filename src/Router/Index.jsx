

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "../Test/Index";
import ProductDetails from "../ProdacutDetails/Index";
import Navbar from "../Layout/Nabar";
import ProductCardsFirst from "../HomePage/Index";
import SlidAll from "../HomePage/SlidAll";
import TrendingAndRecommended from "../HomePage/TrendingAndRecommended";

function Index() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<SlidAll/>
<TrendingAndRecommended/>
<ProductCardsFirst/>
<ProductList/>
<Routes>
  <Route path="/ProductDetails" element={<ProductDetails/>}></Route> 
</Routes>
</BrowserRouter>

    </>
  )
}
export default Index;
