import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginReg from "./Pages/Auth/LoginReg";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";


function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout /> }>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />  
      <Route path="login" element={<LoginReg /> } />
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
