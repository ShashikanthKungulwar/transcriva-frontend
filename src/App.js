// import logo from './logo.svg';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import StickyFooter from './components/footer/Footer';
import Home from './pages/home/Home';
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Outlet /><StickyFooter /></>,
      children: [
        {
          index: true,
          element:<Home />
        },
        {
          path:"/sign-in",
          element:<SignIn />
        },
        {
          path:"/sign-up",
          element:<SignUp />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
