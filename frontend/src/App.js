import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import ProtecteRoute from './components/ProtectRoutes/ProtecteRoute';

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtecteRoute><HomePage /></ProtecteRoute>} />
        <Route path='/login' element={<ProtecteRoute><Login /></ProtecteRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
