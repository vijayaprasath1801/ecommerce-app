import React from 'react';
import './App.css';
import categories from './categories';
import 
function App() {
  return (
   <div className='categories-container'>
   {
    categories.map(({title})=>(
      <div className='category-container'>
      
      <div className='category-body-container'>
        <h1>{title}</h1>
         <p>Shop Now</p>
      </div>
      </div>
))
   }
   </div>
  );
}

export default App;
