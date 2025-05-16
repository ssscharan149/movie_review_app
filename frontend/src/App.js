import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./components/home/Home"
import RootLayout from './components/RootLayout/RootLayout';
import Register from './components/register/Register'
import Login from "./components/login/Login"
import Profile from './components/profile/Profile'
import MovieDetails from './components/movieDetails/MovieDetails';
import { MovieProvider } from './context/MovieContext';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/movie/:id",
          element:<MovieDetails/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }
      ]
    },
  ])
  return (
    <div>
      <MovieProvider>
        <RouterProvider router={router}/>
      </MovieProvider>
    </div>
  );
}

export default App;
