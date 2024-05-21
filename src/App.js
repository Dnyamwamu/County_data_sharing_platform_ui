import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Data from "./Data";
import Organizations from "./Organizations";
import Dashboard from "./Dashboard";
import LoginPage from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/data" element={<Data />}></Route>
        <Route path="/organizations" element={<Organizations />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        {/*
        <Route path="/product/:product_id" element={<ProductPage />}></Route>
         */}
      </Routes>
    </div>
  );
}

export default App;
