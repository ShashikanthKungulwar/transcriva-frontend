// import logo from './logo.svg';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import StickyFooter from './components/footer/Footer';
import Home from './pages/home/Home';
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Profile from './pages/profile/Profile';
import Update from './pages/update/Update';
import 'react-toastify/dist/ReactToastify.css';
import CustomToastContainer from './ToastCusomization/CustomToastContainer';
import { successToast } from './ToastCusomization/toastCalls';
import About from './pages/about/About';
import MyTranscriptions from "./pages/myTranscriptions/MyTranscriptions";


function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);
  function logOut() {
    setLogin(false);
    setAuth(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    successToast('successfully loged out');

  }
  if (!user && localStorage.getItem('token')) {
    setLogin(true);
    setAuth(localStorage.getItem('token'));
    setUser(JSON.parse(localStorage.getItem('user')));
  }


  const router = getRouter(login, setLogin, user, setUser, auth, setAuth, logOut);

  return (
    <div className="App">
      <CustomToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}


function getRouter(login, setLogin, user, setUser, auth, setAuth, logOut) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header login={login} logOut={logOut} /><Outlet /><StickyFooter /></>,
      children: [
        {
          index: true,
          element: <Home login={login} auth={auth} user={user} />
        },
        {
          path: "/sign-in",
          element: <SignIn login={login} setLogin={setLogin} setUser={setUser} setAuth={setAuth} />
        },
        {
          path: "/sign-up",
          element: <SignUp login={login} setLogin={setLogin} />
        },
        {
          path: "/profile",
          element: <Profile login={login} user={user} logOut={logOut} />
        },
        {
          path: "/update",
          element: <Update login={login} setLogin={setLogin} setUser={setUser} setAuth={setAuth} auth={auth} />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/my-transcriptions",
        element: <MyTranscriptions login={login} auth={auth} />
        }
      ]
    }
  ]);
  return router;
}

export default App;
