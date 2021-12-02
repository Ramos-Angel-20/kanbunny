import { Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import ProjectsPage from './pages/ProjectsPage';
import Board from './components/Board';

const App = () => {
  return (
    <Routes>
      <Route path='/account' element={<AuthPage/>}/>
      <Route path='/projects' element={<Board/>}/>
    </Routes>
  );
}

export default App;
