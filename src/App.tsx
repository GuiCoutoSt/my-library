import { general_medicine } from './data/medicine';
import { nutrition } from './data/nutrition';

import { Switch, Route } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Instructions } from './pages/Instructions';
import { SectionPage } from './components/SectionPage';

export const App = () => {
  return (
    <>
      <Header />
      <Flex as='main' justifyContent='center'>
        <Box maxWidth='1200px'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/instructions' component={Instructions}></Route>
            <Route exact path='/subject/general-medicine'>
              <SectionPage
                sessionName='Medicina Geral'
                data={general_medicine}
              />
            </Route>
            <Route exact path='/subject/nutrition'>
              <SectionPage sessionName='Nutrição' data={nutrition} />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </>
  );
};
