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




export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/cookingregistration1' element={<CookingRegistration1 />}></Route>
        <Route path='/cookingregistration2' element={<CookingRegistration2 />}></Route>
        <Route path='/contentdetail' element={<ContentDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


