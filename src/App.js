
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginReg from "./Pages/Auth/LoginReg";
import ResetPassword from "./Pages/Auth/ResetPassword";
import SendPasswordResetEmail from "./Pages/Auth/SendPasswordResetEmail"
import Contact from "./Pages/Contact";

import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Changepassword from "./Pages/Auth/Changepassword";


function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout /> }>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />  
      <Route path="login" element={<LoginReg /> } />
      <Route path="sendpassreset" element={<SendPasswordResetEmail />} />
      <Route path="reset" element={<ResetPassword />} />
     
    </Route>
    <Route path="/dashboard" element={ < Dashboard /> } />
    <Route path="/changepass" element={ < Changepassword /> } />
    <Route path="*" element={<h1>Error 404 Page not Found</h1>  } />
    
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
