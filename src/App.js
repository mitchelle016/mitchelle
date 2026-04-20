
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Makepayment from './components/Makepayment';
import Footer from './components/Footer';
function App() {
  return (

    <BrowserRouter>
    
    <div className="App full-height">
      <header className="App-header">
       
        <h1>welcome to Killi Home Essentials</h1>
      </header>
      <nav>
        <Link to="/signup" className='btn btn-primary m-3' > Signup</Link>
        <Link to="/signin" className='btn btn-success m-3'>Signin</Link>
        <Link to="/addproduct" className='btn btn-warning m-3'>Addproduct</Link>
        <Link to="/" className='btn btn-dark m-3'>Getproduct</Link>


      </nav>
      <Routes>
        <Route path="/" element={<Getproduct/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/makepayment" element={<Makepayment/>}/>



      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
