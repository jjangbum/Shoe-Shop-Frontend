import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className='App h-screen w-full relative flex flex-row justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/item' element={<ItemList />} />
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
