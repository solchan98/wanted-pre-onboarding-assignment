import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/main';
import Favorites from './routes/favorites';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/favorites' element={<Favorites />}/>      
      </Routes>
    </div>
  );
};

export default App;
