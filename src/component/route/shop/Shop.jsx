import { Routes , Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';

import './shop.styles.scss';


function Shop(){
  
    return(
     <Routes>
      <Route index element={<CategoriesPreview />} ></Route>
      <Route path=':category' element={<Category />}></Route>
     </Routes>
    );
  }

  export default Shop;