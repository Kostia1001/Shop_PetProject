import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
