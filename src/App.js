import { Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/account' element={<AuthPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
    </Routes>

    
  );
}

export default App;
