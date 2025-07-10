import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import { Suspense } from "react";
import { lazy } from "react";

// import Home from "./component/Home";
// import User from "./component/User";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Navbar from "./component/Navbar";

const Home=lazy(()=> import('./component/Home'));
const User=lazy(()=> import('./component/User'));
const About=lazy(()=> import('./component/About'));
const Navbar=lazy(()=> import('./component/Navbar'));
const Contact=lazy(()=> import('./component/Contact'));

function App() {

  return (
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Suspense fallback={<h2>page is loading..</h2>}><Home/></Suspense>}/>
            <Route path="/user" element={<Suspense fallback={<h2>page is loading..</h2>}><User/></Suspense>}/>
            <Route path="/about" element={<Suspense fallback={<h2>page is loading..</h2>}><About/></Suspense>}/>
            <Route path="/contact" element={<Suspense fallback={<h2>page is loading..</h2>}><Contact/></Suspense>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;