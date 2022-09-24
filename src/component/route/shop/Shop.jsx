import { Routes , Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import { useEffect } from 'react';
import {getCategoriesAndDocuments} from '../../../utils/firebase/firebase';
import { setCategories} from '../../../store/categories/categories-action';
import { useDispatch } from 'react-redux';


function Shop(){
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };
      
    getCategoriesMap();
  }, [dispatch]);

  

    return(
     <Routes>
      <Route index element={<CategoriesPreview />} ></Route>
      <Route path=':category' element={<Category />}></Route>
     </Routes>
    );
  }

  export default Shop;