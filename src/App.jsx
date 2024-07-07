import './App.css';
import HomePage from "./Components/HomePage.jsx"
import ProductPage from './Components/ProductPage.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from './Components/Products.jsx';
import CheckoutPage from './Components/CheckoutPage.jsx';
import { Provider } from 'react-redux';
import store from "../store/Cart.js"

const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  {path: "/products", element: <Products />},
  {path: "/:productId", element: <ProductPage />},
  {path: "/checkout", element: <CheckoutPage />}
])

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
