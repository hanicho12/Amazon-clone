import React, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Orders from './Components/Orders'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import { auth } from './Components/firebase'
import { useStateValue } from './Components/StateProvider'
import Payment from './Components/Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
"pk_test_51LJR0bKGRkVesVeU0UhA4gSUHuhuWMr6T8tFoYIJMUePtep56eikXPcQcFoVa0DxMHmhmFuzNvNFXmNOHDbewXpi00i6pTNYFl"
);



function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>     
            <Route path="/orders" element={<><Header/> <Orders /></> }  />
            <Route path="/login" element={<Login /> }  />
            <Route path="/payment" element={ <Elements stripe={promise}><Payment />  </Elements>}  />
            <Route path="/checkout" element={<><Header/> <Checkout /></>}  />
            <Route path="/" element={<><Header/> <Home /></>}  />
          </Routes>
        </div>
      </Router>
  </div>
  )
}

export default App