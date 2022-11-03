import LinkBox from '../link-box/link-box.component';
import Profile from '../profile/profile.component';
import LinkBottom from '../link-bottom/link-bottom.component'
import Button from '../../components/button/button.component';

import { LinksContainerDiv } from './links-container.styles';


const LinkContainer = ({ data }) => {
   // console.log(data)
   const { linksData } = data;
   // console.log(linksData)

   return (
      <LinksContainerDiv>
         <Profile/>
         {
            linksData.map(data => {
               const {id, linkName, link} = data;
               return (<LinkBox key={id} linkName={linkName} link={link}/>)
            })
         }
         <LinkBottom/>
         <Button/>
      </LinksContainerDiv>
   )
};

export default LinkContainer;