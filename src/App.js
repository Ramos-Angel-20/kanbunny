import { Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/layout';

import AuthPage from './pages/AuthPage';
import ProjectsPage from './pages/ProjectsPage';
import Column from './components/Column';


const App = () => {
  return (
    // <Routes>
    //   <Route path='/account' element={<AuthPage/>}/>
    //   <Route path='/projects' element={<ProjectsPage/>}/>
    // </Routes>
    <Flex backgroundColor='#cecece' h='100vh' w='full' align='spa' justify='center' overflow='hidden'>
      <Column/>
    </Flex>
  );
}

export default App;
