import { Route, Routes } from 'react-router';

import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';

import './App.css';
import '../src/sass/main.scss';

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
