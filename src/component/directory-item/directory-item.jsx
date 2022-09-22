import './directory-item.styles.scss';
import React from 'react';

function DirectoryItem(props){
    return(
    <div className='directory-item-container'>
      <div className='background-image' style={{backgroundImage : `url(${props.imageUrl})`}}/>
      <div className='body'>
   <h2>{props.title}</h2>
    <p>Shop Now</p>
 </div>
 </div>
    )
}
  
export default DirectoryItem;