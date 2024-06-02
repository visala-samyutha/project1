import './App.css';
import LoginComponent from './components/LoginComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import PaswordComponent from './components/PasswordComponent';
import HeaderComponent from './components/HeaderComponent';
// import PrivComponent from './components/PrivComponent';
// import FooterComponent from './components/FooterComponent'
import ProductComponent from './components/ProductComponent';
import SignUpComponent from './components/SignUpComponent';
import HomeComponent from './components/HomeComponent';
import MainComponent from './components/MainComponent';
import CartComponent from './components/CartComponent';
import OrderComponent from './components/OrderComponent';

function App() {
  return(
 <BrowserRouter>
 <HeaderComponent/>
 <Routes>
 <Route path="/" exact element={<MainComponent/>}></Route>
  <Route path="/login" exact element={<LoginComponent/>}></Route>
  {/* <Route path="/pass" exact element={<PaswordComponent/>}></Route> */}
   {/* <Route path="/term" exact element={<PrivComponent/>}></Route> */}
 <Route path="/signup" exact element={<SignUpComponent/>}></Route>
 <Route path="/home" exact element={<HomeComponent/>}></Route>
 <Route path="/product" exact element={<ProductComponent/>}></Route>
 <Route path="/cart" exact element={<CartComponent/>}></Route>
 <Route path="/order" exact element={<OrderComponent/>}></Route>
 
 
  </Routes>
 {/* <FooterComponent/> */}
 </BrowserRouter>
    
  )
}

export default App;
