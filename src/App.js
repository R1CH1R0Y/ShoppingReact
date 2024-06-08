import logo from './logo.svg';
import './App.css';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import Remove from './components/Remove';
import JsonObjectProducts from './components/JsonObjectProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/remove' element={<Remove/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/jsonobj' element={<JsonObjectProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

