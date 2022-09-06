import { ecology } from './data/ecology';
import { general_medicine } from './data/general_medicine';
import { nutrition } from './data/nutrition';
import { pedagogy } from './data/pedagogy';
import { psicology } from './data/psicology';
import { reference } from './data/reference';

import { Switch, Route } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Instructions } from './pages/Instructions';
import { SectionPage } from './components/SectionPage';
import { literature } from './data/literature';

export const App = () => {
  return (
    <>
      <Header />
      <Flex as='main' justifyContent='center'>
        <Box maxWidth='1200px'>
          <Switch>
            <Route exact path='/' component={Home}></Route>

            <Route exact path='/instructions' component={Instructions} />

            <Route exact path='/contact' component={Contact} />

            <Route exact path='/subject/ecology'>
              <SectionPage sectionName='Ecologia' data={ecology} />
            </Route>

            <Route exact path='/subject/literature'>
              <SectionPage sectionName='Literatura' data={literature} />
            </Route>

            <Route exact path='/subject/general-medicine'>
              <SectionPage
                sectionName='Medicina Geral'
                data={general_medicine}
              />
            </Route>

            <Route exact path='/subject/nutrition'>
              <SectionPage sectionName='Nutrição' data={nutrition} />
            </Route>

            <Route exact path='/subject/pedagogy'>
              <SectionPage sectionName='Pedagogia' data={pedagogy} />
            </Route>

            <Route exact path='/subject/psicology'>
              <SectionPage sectionName='Psicologia' data={psicology} />
            </Route>

            <Route exact path='/sunject/reference'>
              <SectionPage sectionName='Referência' data={reference} />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </>
  );
};
