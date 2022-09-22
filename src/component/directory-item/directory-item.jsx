import React from 'react';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

function DirectoryItem(props){
    return(
    <DirectoryItemContainer>
      <BackgroundImage style={{backgroundImage : `url(${props.imageUrl})`}}/>
      <Body>
   <h2>{props.title}</h2>
    <p>Shop Now</p>
 </Body>
 </DirectoryItemContainer>
    )
}
  
export default DirectoryItem;