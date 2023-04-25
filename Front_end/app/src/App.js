import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import { Router } from "@reach/router";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import Payment from "./Pages/Payment";
import Manager from "./Pages/Manager";
import Reports from "./Pages/Reports";

function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Router>
        <Home path="home" />
        <SignIn path="/"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
        <Payment path="/payment" />
        <Manager path="manager" />
        <Reports path="reports" />
      </Router>
    </main>
  );
}

export default App;
