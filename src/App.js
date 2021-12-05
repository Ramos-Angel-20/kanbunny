import { Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage'

const App = () => {
  return (
    <Routes>
      <Route path='/account' element={<AuthPage />}/>
      <Route path='/projects' element={<ProjectsPage />}/>
      <Route path='/project/project-slug' element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
