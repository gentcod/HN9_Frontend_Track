import { ReactComponent as SlackSVG} from '../../assets/slack.svg'
import { ReactComponent as GitHubSVG} from '../../assets/github.svg'
import styled from 'styled-components';

export const SlackLogo = styled(SlackSVG)`
   margin-right: 1rem;
`

export const GitHubLogo = styled(GitHubSVG)`

`

export const LinkBottomContainer = styled.div`
   height: 6rem;
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`

export const LogoWrap = styled.a`
   display: inline-block;
`