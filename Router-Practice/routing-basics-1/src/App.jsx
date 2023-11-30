import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Product from './components/Product';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/' element={<Navigate to='/'></Navigate>}></Route>
        <Route path='/' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
