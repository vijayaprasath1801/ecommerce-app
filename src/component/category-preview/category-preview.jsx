import './category.styles.scss';
import ProductCard from '../product-card/product-card';
import { Link } from 'react-router-dom';

function CategoryPreview({title, products}){

    return(
        <div className='category-preview-container'>
        <h2>
            <span className='title'>{title.toUpperCase()}</span>
            <Link className='more' to={title}>+More</Link>
        </h2>
          <div className='preview'>
            {
            products.filter((_, idx) =>idx < 4)
            .map((product)=>
            <ProductCard key={product.id} product={product}/>)
            }
          </div>
        </div>
    )
}

export default CategoryPreview;