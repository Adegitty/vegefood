// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Body from './components/body/Body'
// import Cart from './pages/cart/Cart'
// import './App.css'

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/shop" element={<h1>Shop Page</h1>} />
//           <Route path="/wishlist" element={<h1>Wishlist Page</h1>} />
//           <Route path="/single-product" element={<h1>Single Product Page</h1>} />
//           <Route path="/Cart" element={<h1>Cart Page</h1>} />
//           <Route path="/checkout" element={<h1>Checkout Page</h1>} />
//           <Route path="/about" element={<h1>About Page</h1>} />
//           <Route path="/blog" element={<h1>Blog Page</h1>} />
//           <Route path="/contact" element={<h1>Contact Page</h1>} />
//         </Routes>
//         <Body />
//       </main>
//     </Router>
//   );
// };

// export default App;




import './App.css'
import Checkout from './pages/checkout/Checkout'
import Home from './pages/home/Home'
import Login from '../src/pages/login/Login'
import Shop from '../src/pages/shop/Shop'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Signup from './pages/signup/Signup'
import Homeroute from './routes/Homeroute'
import { RouterProvider, createBrowserRouter } from 'react-router'

function App() {

const router = createBrowserRouter([
  {
    path: "",
    element: <Homeroute />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/shop",
        element: <Shop />
      },

      {
        path: "/cart",
        element: <ShoppingCart />
      },

      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  },

  {
    path: "/sign-up",
    element: <Signup />
  },

  {
    path: "/login",
    element: <Login />
  }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
