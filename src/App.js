import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/LoginRegister/Login/Login';
import SignUp from './components/Pages/LoginRegister/SignUp/SignUp';
import Blogs from './components/Pages/Blogs/Blogs';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import NotFound from './components/Shared/NotFound/NotFound';
import RequireAuth from "./components/Pages/LoginRegister/RequiredAuth/RequiredAuth";
import About from './components/Pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
