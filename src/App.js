import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Team from './pages/Team';
import Test from './pages/Test';
import CookingRegistration1 from './pages/CookingRegistration1';
import CookingRegistration2 from './pages/CookingRegistration2';
import ContentDetail from './pages/ContentDetail';
import { RecoilRoot } from 'recoil';
import ShoppingCarts from './components/ShoppingCarts';
import RouteChangeTracker from "./RouteChangeTracker";
import React, { useEffect } from 'react';

export default function App() {
  RouteChangeTracker();

  return (
    <RecoilRoot>
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/cookingregistration1' element={<CookingRegistration1 />}></Route>
        <Route path='/cookingregistration2' element={<CookingRegistration2 />}></Route>
        <Route path='/shoppingcarts' element={<ShoppingCarts />}></Route>
        <Route path='/contentdetail/:id' element={<ContentDetail />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </RecoilRoot>
  );
}


