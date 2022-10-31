import { LinkBoxContainer, LinkBoxTextContainer, LinkBoxText } from './link-box.styles';

const LinkBox = ({linkName, link}) => {
   return (
      <LinkBoxContainer>
         <LinkBoxTextContainer href={link}>
            <LinkBoxText>{linkName}</LinkBoxText>
         </LinkBoxTextContainer>
      </LinkBoxContainer>
   )
}

export default LinkBox;