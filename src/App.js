import React from 'react';
import './App.css';
import './component/route/Home';
import { Routes , Route } from 'react-router-dom';
import Home from './component/route/Home';
import Navigation from './component/navbar/Navigation';
import Authentication from './component/route/authentication';
import Shop from './component/route/shop/Shop';

function App(){

 return(
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route  index  element={<Home />} /> 
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
    
  )
}


export default App;
