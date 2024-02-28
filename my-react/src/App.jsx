import { DetailProduct, Home, AllProduct, Login } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/products/terlaris" element={<AllProduct />} />
        <Route path="/products/favorit" element={<AllProduct />} />
        <Route path="/products/:productId" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
