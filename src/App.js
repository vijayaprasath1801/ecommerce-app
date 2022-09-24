import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import './component/route/Home';
import { Routes , Route } from 'react-router-dom';
import Home from './component/route/Home';
import Navigation from './component/navbar/Navigation';
import Authentication from './component/route/authentication';
import Shop from './component/route/shop/Shop';
import Checkout from './component/route/checkout/Checkout';
import { setCurrentUser } from './store/user/user-action';
import { authStateChangedListener , createUserDocumentFromAuth} from "./utils/firebase/firebase";

function App(){
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = authStateChangedListener((user)=>{
     if(user){ createUserDocumentFromAuth(user);}
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
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
