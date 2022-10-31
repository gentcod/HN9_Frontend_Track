import { LinkBottomContainer, SlackLogo, GitHubLogo, LogoWrap } from './link-bottom.styles';

const data = [
   {
      id: 0,
      link: "gentcod"
   },
   {
      id: 0,
      link: "https://github.com/gentcod"
   }
]

const LinkBottom = () => {
   return (
      <LinkBottomContainer>
         <LogoWrap href={data[0].link}>
            <SlackLogo/>
         </LogoWrap>
         <LogoWrap href={data[1].link}>
            <GitHubLogo/>
         </LogoWrap>
      </LinkBottomContainer>
   )
};

export default LinkBottom;