import { Fragment, useContext } from 'react';
import CategoryPreview from '../../category-preview/category-preview';

import { CategoriesContext } from '../../context/categories.context';



function CategoriesPreview(){
  const {categoriesMap} = useContext(CategoriesContext);
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