import { ecology } from './data/ecology';
import { general_medicine } from './data/general_medicine';
import { nutrition } from './data/nutrition';
import { pedagogy } from './data/pedagogy';

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

            <Route exact path='/instructions' component={Instructions} />

            <Route exact path='/subject/ecology'>
              <SectionPage sessionName='Ecologia' data={ecology} />
            </Route>

            <Route exact path='/subject/general-medicine'>
              <SectionPage
                sessionName='Medicina Geral'
                data={general_medicine}
              />
            </Route>

            <Route exact path='/subject/nutrition'>
              <SectionPage sessionName='Nutrição' data={nutrition} />
            </Route>

            <Route exact path='/subject/pedagogy'>
              <SectionPage sessionName='Pedagogia' data={pedagogy} />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </>
  );
};
