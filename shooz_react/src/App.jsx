import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductPage" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
