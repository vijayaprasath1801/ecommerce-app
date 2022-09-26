import React from 'react';
import { useEffect } from 'react';
import './App.css';
import './component/route/Home';
import { Routes , Route } from 'react-router-dom';
import Home from './component/route/Home';
import Navigation from './component/navbar/Navigation';
import Authentication from './component/route/authentication';
import Shop from './component/route/shop/Shop';
import Checkout from './component/route/checkout/Checkout';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user-action';

function App(){
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(checkUserSession());
  },[dispatch]);
 return(
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route  index  element={<Home />} /> 
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
    
  )
}


export default App;
