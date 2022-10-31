import {ReactComponent as ZuriSVG} from '../../assets/Zuri.Internship_Logo.svg'
import {ReactComponent as I4GSVG} from '../../assets/I4G.svg'
import styled from "styled-components";

export const ZuriLogo = styled(ZuriSVG)`
   margin-top: 2.5rem;
`

export const I4GLogo = styled(I4GSVG)`
   margin-top: 2.5rem;
`

export const SectionContainer = styled.div`
   margin: 0 auto;
   height: 10rem;
   width: 70%;
   display: flex;
   flex-direction: row;
   align-items: baseline;
   justify-content: space-between;
`

export const SectionText = styled.p`
   font-size: 1.2rem;
   color: #667085;
`