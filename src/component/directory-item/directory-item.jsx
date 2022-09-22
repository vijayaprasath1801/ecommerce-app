import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

function DirectoryItem({category}){
   const {title , imageUrl, route} = category;
   const navigate = useNavigate();
   const onNavigate = ()=> navigate(route);
    return(
    <DirectoryItemContainer onClick={onNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
   <h2>{title}</h2>
    <p>Shop Now</p>
 </Body>
 </DirectoryItemContainer>
    )
}
  
export default DirectoryItem;