import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import About from './routes/about';
import Contact from './routes/contact';
// import Home from './components/home';
import Department from './routes/department';
import Semester from './routes/semester';
import Papers from './routes/papers';
import Paper from './components/paper';
import './firebase/index.js'
import NotFound from './components/NotFound';


const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scroll(0, 0)
  }, [location.pathname])
  return children
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/department/:department' element={<Department />}>
            {/* <Route path='/department/:department/:sem' element={<Semester />}> */}
            {/* <Route path='/department/:department/:sem/:paper' element={<Paper />} /> */}
          </Route>
          <Route exact path='/department/:department/:sem' element={<Papers />} />
          <Route exact path='/department/:department/:sem/:paper' element={<Paper />} />


          {/* <Route exact path='/department/:department/:sem' element={<Semester />} /> */}
          {/* <Route exact path='/department/:department/:sem/:papers' element={<Papers />} /> */}
          {/* <Route exact path='/department/:department/:sem/:papers/:paper' element={<Paper />} /> */}
          <Route exact path='about' element={<About />} />
          <Route exact path='contact' element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
