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

function App() {
  const [login, setLogin] = useState(false);
  const router = getRouter(login);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


function getRouter(login) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header login={login} /><Outlet /><StickyFooter /></>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/sign-in",
          element: <SignIn />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path:"/update",
          element:<Update />
        }
      ]
    }
  ]);
  return router;
}

export default App;
