import CategoryItem from '../category/category.item';
import categories from '../category/categories';
import '../directory/categories.styles.scss';

function DirectoryItem(){
    return(
<div className='categories-container'>
   {
    categories.map(({title , id , imageUrl})=>(
    <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
))
   }
   </div>
    )
}

export default DirectoryItem;