import { Switch, Route } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Instructions } from './pages/Instructions';
import { AllSubjects } from './pages/AllSubjects';
import { PagePerSubject } from './pages/PagePerSubject';

import { subjectLinks } from './utils/subjectLinks';

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

            <Route exact path='/all-subjects' component={AllSubjects} />

            {subjectLinks.map((item, index) => {
              return (
                <Route exact path={`/subject/${item.url}`} key={index}>
                  <PagePerSubject
                    sectionName={item.innerText}
                    data={item.data}
                  />
                </Route>
              );
            })}
          </Switch>
        </Box>
      </Flex>
    </>
  );
};
