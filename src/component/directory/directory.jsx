import DirectoryItem from '../directory-item/directory-item';
import categories from '../directory-item/categories';
import '../directory/categories.styles.scss';

function Directory(){
    return(
<div className='categories-container'>
   {
    categories.map(({title , id , imageUrl})=>(
    <DirectoryItem key={id} title={title} imageUrl={imageUrl}/>
))
   }
   </div>
    )
}

export default Directory;