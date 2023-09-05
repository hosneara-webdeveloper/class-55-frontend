
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Layout/Router'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Prodcuts/ProductsPage/Products'
import Cart from './Components/CartPage/Cart'
import Thanks from './Components/Thanks'
import Register from './Components/Account/Register'
import Login from './Components/Account/Login'
import PrivateRouter from './PrivateRouter/PrivateRouter'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router></Router>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('http://localhost:3000/')
          }
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/shop',
          element: <Products></Products>,
          loader: async () => {
            return fetch('http://localhost:3000/')
          }
        },
        {
          path: '/cart/:id',
          element: <PrivateRouter><Cart></Cart></PrivateRouter>, // eta holo private router jetar children holo cart
          loader: async ({ params }) => {
            return fetch(`http://localhost:3000/${params.id}`)
          }
        },
        {
          path: '/thanks/:id',
          element: <Thanks></Thanks>,
          loader: async ({ params }) => fetch(`http://localhost:3000/${params.id}`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
