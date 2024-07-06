import './App.css';
import HomePage from "./Components/HomePage.jsx"
import ProductPage from './Components/ProductPage.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from './Components/Products.jsx';
import ContactPage from './Components/ContactPage.jsx';
import { Provider } from 'react-redux';
import store from "../store/Cart.js"

const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  {path: "/products", element: <Products />},
  {path: "/:productId", elements: <ProductPage />},
  {path: "/contact", elements: <ContactPage />}
])

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
