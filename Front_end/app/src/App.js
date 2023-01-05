import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import { Router } from "@reach/router";

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import Payment from "./Pages/Payment";
import TrainSchedule from "./Pages/TrainSchedule";


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      {/* <Header/> */}
      <Router>
        
        <Home path="home" />
        <SignIn path="/"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
        <Payment path="/payment" />
        <TrainSchedule path="/train-schedule" />
      </Router>
    </main>
  );
}

export default App;
