import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreFront from "./pages/StoreFront";
import ProductDetails from "./pages/ProductDetails";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Delivery from "./pages/ProductDelivery";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
export default function App() {
  const [willThisWorkLol, setWillThisWorkLol] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWillThisWorkLol(true);
    }
  }, []);
  return willThisWorkLol ? (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<StoreFront />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}>
          <Route path="/products/:id/delivery" element={<Delivery />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  ) : null;
}
