import DirectoryItem from '../directory-item/directory-item';
import categories from '../directory-item/categories';
import { CategoriesContainer } from './categories.styles.jsx';

function Directory(){
    return(
<CategoriesContainer>
   {
    categories.map((category)=>(
    <DirectoryItem key={category.id} category={category}/>
))
   }
   </CategoriesContainer>
    )
}

export default Directory;