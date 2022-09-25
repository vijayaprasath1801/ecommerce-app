import { useParams } from 'react-router-dom';
import ProductCard from '../../product-card/product-card';
import {  useState , useEffect, Fragment} from 'react';
import { CategoryContainer,  Title } from './category.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCategories, selectCategoriesIsLoading } from '../../../store/categories/categories-selector';
import Spinner from '../../spinner/spinner';


const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategories);
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
  
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        { isLoading ? (<Spinner /> ) : (<CategoryContainer>
           {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>)
        }
      </Fragment>
    );
  };
  
  export default Category;