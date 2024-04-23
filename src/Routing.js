import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import Sidebar from './Admin/Sidebar';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import AdminLogin from './Login/AdminLogin';
import Home from './Page/Home';

const Routing = () => {
  const [path, setPath] = useState("/");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setPath(window.location.pathname);
  });


  return (
    <>
      {
        path.includes("admin/") ? (
          <>
            <BrowserRouter>
              {login ? (
                <>
                  <Sidebar />
                  <Routes>
                    <Route path='/admin/login' element={<AdminLogin />} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                  </Routes>
                </>
              ) : (
                <AdminLogin setLogin={setLogin} />
              )}
            </BrowserRouter>
          </>
        ) : (
          <>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                    <Route path='/' element={<Home />} />
                  </Routes>
              <Footer/>
            </BrowserRouter>
          </>
        )
      }
    </>
  )
}
export default Routing