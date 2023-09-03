import { RouterProvider, createBrowserRouter,  } from "react-router-dom";
import 'animate.css';
import HomePage from "./pages/Homepage";
import RootLayout from "./layout";
import postForm from "./features/posts/postForm";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter ([
  {
    path: '/',
    Component: RootLayout,
    Children: [
      {
       path: '/',
       Element: <HomePage />
      },
      {
        path: 'add-post',
       Element: <postForm />
      }
    ],
 
  },

  {
    path: '/dashboard',
    Component: Dashboard,
    children: [

    ],
  },

])

const App = () => {
  return <RouterProvider router={router} /> 
}

export default App