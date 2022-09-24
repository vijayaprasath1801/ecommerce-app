import CategoryPreview from '../../category-preview/category-preview';

import { selectCategories } from '../../../store/categories/categories-selector';
import { useSelector } from 'react-redux';



function CategoriesPreview(){

  const categoriesMap = useSelector(selectCategories);
 
    return(
     <>
      {
      Object.keys(categoriesMap).map((title)=>{
          const products = categoriesMap[title];
            return ( <CategoryPreview key={title} title={title} products={products}/>
      );
      })
      }
      </>
    );
  }

  export default CategoriesPreview;