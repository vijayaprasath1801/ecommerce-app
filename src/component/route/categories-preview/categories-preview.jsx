import CategoryPreview from '../../category-preview/category-preview';

import { selectCategories, selectCategoriesIsLoading } from '../../../store/categories/categories-selector';
import { useSelector } from 'react-redux';
import Spinner from '../../spinner/spinner';



function CategoriesPreview(){

  const categoriesMap = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
 
    return(
     <>
      { isLoading ? (<Spinner />) : (
      Object.keys(categoriesMap).map((title)=>{
          const products = categoriesMap[title];
            return ( <CategoryPreview key={title} title={title} products={products}/>
      );
      })
      )
      }
      </>
    );
  }

  export default CategoriesPreview;