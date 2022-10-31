import { SectionContainer, ZuriLogo, I4GLogo, SectionText } from './hn9-section.styles';

const textContent = "HNG Internship 9 Frontend Task"

const Hn9Section = () => {
   return (
      <SectionContainer>
         <ZuriLogo />
         <SectionText>{textContent}</SectionText>
         <I4GLogo />
      </SectionContainer>
   )
}

export default Hn9Section;