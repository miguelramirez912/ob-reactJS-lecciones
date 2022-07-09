import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useParams } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/Profile/ProfilePage';
import TaskPage from './pages/Tasks/TaskPage';
import TaskDetailPage from './pages/Tasks/TaskDetailPage';
import LoginPage from './pages/Auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/Home/StatePage';



function AppRoutingOne() {

  let logged = false;

  let tasksList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Mi primer tarea'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Mi segunda tarea'
    }
  ]

  
  useEffect(() => {
    logged = localStorage.getItem('credential');
    console.log('¿El usuario esta logueado? ', logged);
  });


  return (
    <Router>
      <aside>
        <Link to='/'>|| HOME |</Link>
        <Link to='/about'>| ABOUT |</Link>
        <Link to='/faqs'>| FAQs |</Link>
        <Link to='/tasks/1'>| Tarea 1 |</Link>
        <Link to='/tasks/2'>| Tarea 2 |</Link>
        <Link to='/noruta'>| noPage ||</Link>
        <Link to='/login'>| LogIn ||</Link>
      </aside>

      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/online-state' element={<StatePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/faqs' element={<AboutPage/>}/>
          <Route path='/profile' element={logged ? <ProfilePage/> 
          : <Navigate replace to='/login'/>}>
          </Route>
          <Route path='/login' element={logged ? <Navigate replace to='/profile'/> 
          : <LoginPage/>}>
          </Route>
          {/* <Route path='/tasks' element={<TaskPage />}>
            <Route path=':id' element={<TaskDetailPage/>}/>
          </Route> */}
          <Route path='/tasks' element={<TaskPage />}/>
          <Route path='/tasks/:id' element={<TaskDetailPage tasks={tasksList}/>}/>

          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingOne;
