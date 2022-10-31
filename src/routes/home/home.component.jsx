import { useContext } from 'react';

import { LinksContext } from '../../context/links.context';

import LinkContainer from "../../components/links-container/links-container.component";
import Hn9Section from '../../components/hn9-section/hn9-section.components';

import { HomeContainer } from './home.styles';

const Home = () => {
   const linksData = useContext(LinksContext);
   return (
      <HomeContainer>
         <LinkContainer data={linksData}/>
         <Hn9Section/>
      </HomeContainer>
   )
};

export default Home;