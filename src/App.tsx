import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Favorites from './routes/Favorites';

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
