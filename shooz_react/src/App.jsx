import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FilterSideBarPage from "./Pages/FilterSideBarPage";
import FilterDrawerPage from "./Pages/FilterDrawerPage";
import ProductDetailPage from "./Pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilterSideBarPage" element={<FilterSideBarPage />} />
      <Route path="/FilterDrawerPage" element={<FilterDrawerPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
