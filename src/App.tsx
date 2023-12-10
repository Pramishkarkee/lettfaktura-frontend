import "./polyfill"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard} from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

import Products from "./Tables/Products";

function App() {

  //only price list component is created thus we are using dashboard everywhere
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/pricelists" element={<Products/>} />
      <Route path="/setting" element={<Dashboard/>} />
      <Route path="/invoices" element={<Dashboard/>} />
      <Route path="/customers" element={<Dashboard/>} />
      <Route path="/invoicejournal" element={<Dashboard/>} />
      <Route path="/mutipleinvoice" element={<Dashboard/>} />
      <Route path="/members" element={<Dashboard/>} />
      <Route path="/importexport" element={<Dashboard/>} />
      <Route path="/control" element={<Dashboard/>} />
    </Routes>
    </>
  );
}

export default App;
