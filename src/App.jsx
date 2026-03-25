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
import AboutUs1Page from "./Pages/AboutUs1Page";
import AboutUs2Page from "./Pages/AboutUs2Page";
import WishlistPage from "./Pages/WishlistPage";
import ProfileModal from "./components/ProfileModal/ProfileModal";

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
      <Route path="/AboutUs1Page" element={<AboutUs1Page />} />
      <Route path="/AboutUs2Page" element={<AboutUs2Page />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/ProfileModal" element={<ProfileModal/>}/>
    </Routes>
  );
}

export default App;
