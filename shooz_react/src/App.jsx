﻿import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FilterSideBarPage from "./Pages/FilterSideBarPage";
import FilterDrawerPage from "./Pages/FilterDrawerPage";
import FilterTopBarPage from "./Pages/FilterTopBarPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ListLeftSideBarPage from "./Pages/ListLeftSideBarPage";
import GridRightSideBarPage from "./Pages/GridRightSideBarPage";
import ListItemOverlayPage from "./Pages/ListItemOverlayPage";
import GridItemBoxPage from "./Pages/GridItemBoxPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilterSideBarPage" element={<FilterSideBarPage />} />
      <Route path="/FilterDrawerPage" element={<FilterDrawerPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/FilterTopBarPage" element={<FilterTopBarPage />} />
      <Route path="/ListLeftSideBarPage" element={<ListLeftSideBarPage />} />
      <Route path="/GridRightSideBarPage" element={<GridRightSideBarPage />} />
      <Route path="/ListItemOverlayPage" element={<ListItemOverlayPage />} />
      <Route path="/GridItemBoxPage" element={<GridItemBoxPage />} />
    </Routes>
  );
}

export default App;
