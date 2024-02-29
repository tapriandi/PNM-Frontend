import { Header } from "./Components/Atoms";
import { DetailProduct, Home, AllProduct, Login } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed top-0 left-0 w-full px-[10%] bg-gray-50/60">
        <Header />
      </div>

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
