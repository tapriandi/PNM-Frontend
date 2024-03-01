import { Header, PrivateRoute } from "./Components/Atoms";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { DetailProduct, Home, AllProduct, Login, Profile } from "./Pages";

function App() {
  const isAuth = localStorage.getItem("isAuthenticated");

  // cara 1
  const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // cara 2
  const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <div className="fixed z-10 top-0 left-0 w-full px-[10%] bg-gray-100/60">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/products/terlaris" element={<AllProduct />} />
        <Route path="/products/favorit" element={<AllProduct />} />
        {/*  cara 1 */}
        <Route
          path="/products/:productId"
          element={
            <PrivateRoute auth={{ isAuthenticated: true }}>
              <DetailProduct />
            </PrivateRoute>
          }
        />
        {/*  cara 1 */}
        <Route element={<PrivateWrapper auth={{ isAuthenticated: isAuth }} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
