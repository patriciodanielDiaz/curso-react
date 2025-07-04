import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Register from "../views/Register";
import Login from "../views/Login";

const Router = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<img src="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg.webp" />} />
          </Routes>
        </BrowserRouter>
    )
}

export { Router }