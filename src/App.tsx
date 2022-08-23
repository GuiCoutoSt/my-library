import { medicine } from './data/medicina';

import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Instructions } from './pages/Instructions';
import { SectionPage } from './components/SectionPage';
import { Box, Flex } from '@chakra-ui/react';

export const App = () => {
  return (
    <>
      <Header />
      <Flex as='main' justifyContent='center'>
        <Box maxWidth='1200px'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/instrucoes' component={Instructions}></Route>
            <Route exact path='/subject/medicine'>
              <SectionPage sessionName='Medicina Geral' data={medicine} />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </>
  );
};
