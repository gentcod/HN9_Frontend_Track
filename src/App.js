import { Route, Routes } from 'react-router';

import Home from './routes/home/home.component';

import './App.css';
import '../src/sass/main.scss';

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
  );
}

export default App;
