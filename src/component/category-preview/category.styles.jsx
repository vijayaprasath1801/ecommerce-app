import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  span{
  font-size: 18px;
  margin-bottom: 25px;
  cursor: pointer;
  }
`;

export const More = styled(Link)`
   display : flex;
    justify-content :right;
    color:#5F6F94;
    font-size: small;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;