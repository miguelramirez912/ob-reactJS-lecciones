import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useParams } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/Auth/LoginPage';
import DashBoard from './pages/DashBoard/DashBoard';


function AppRoutingFinal() {


  //TODO: Cambiar el valor desde sesionStorage
  let loggedIn = true;
  
  return (
    <Router>
      <Routes>
        {/* Rutas Proteguidas */}
        <Route path='/' element={ loggedIn ? 
          <Navigate replace to='/dashboard'/> 
          : <Navigate replace to='/login'/>}/>

        {/* Rutas normales */}
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={loggedIn ? 
          <DashBoard/> 
          : <Navigate replace to='/login'/>}/>

        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
