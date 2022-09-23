import ProductCard from '../product-card/product-card';
import { CategoryPreviewContainer, More, Preview } from './category.styles.jsx';

function CategoryPreview({title, products}){

    return(
        <CategoryPreviewContainer>
        <h2>
            <span>{title.toUpperCase()}</span>
            <More to={title}>View More</More>
        </h2>
          <Preview>
            {
            products.filter((_, idx) =>idx < 4)
            .map((product)=>
            <ProductCard key={product.id} product={product}/>)
            }
          </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;