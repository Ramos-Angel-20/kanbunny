import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Routes>
      <Route path='/account' element={<AuthPage/>}/>
    </Routes>

    
  );
}

export default App;
