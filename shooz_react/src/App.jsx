import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FilterSideBarPage from "./Pages/FilterSideBarPage";
import FilterDrawerPage from "./Pages/FilterDrawerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilterSideBar" element={<FilterSideBarPage />} />
      <Route path="/FilterDrawerPage" element={<FilterDrawerPage />} />
    </Routes>
  );
}

export default App;
