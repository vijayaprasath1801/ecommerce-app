import { Routes , Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import { useEffect } from 'react';
import { fetchcategoriesStart } from '../../../store/categories/categories-action';
import { useDispatch } from 'react-redux';


function Shop(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcategoriesStart());
  }, []);

  

    return(
     <Routes>
      <Route index element={<CategoriesPreview />} ></Route>
      <Route path=':category' element={<Category />}></Route>
     </Routes>
    );
  }

  export default Shop;