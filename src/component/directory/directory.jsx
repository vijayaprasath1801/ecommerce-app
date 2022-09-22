import DirectoryItem from '../directory-item/directory-item';
import categories from '../directory-item/categories';
import { CategoriesContainer } from './categories.styles.jsx';

function Directory(){
    return(
<CategoriesContainer>
   {
    categories.map(({title , id , imageUrl})=>(
    <DirectoryItem key={id} title={title} imageUrl={imageUrl}/>
))
   }
   </CategoriesContainer>
    )
}

export default Directory;