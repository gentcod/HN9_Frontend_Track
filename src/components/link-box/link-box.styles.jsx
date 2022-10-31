import styled from 'styled-components';

export const LinkBoxText = styled.p`
   text-align: center;
   font-weight: 700;
`

export const LinkBoxContainer = styled.div`
   width: 100%;
   background-color: #EAECF0;
   border-radius: .5rem;
   margin-bottom: 1.5rem;
   padding: 1.5rem;

   &:hover {
      background-color: #d8d8d8;
   }

   &:hover ${LinkBoxText} {
      color: #777;
   }
`

export const LinkBoxTextContainer = styled.a`
   height: 100%;
   width: 100%;
`