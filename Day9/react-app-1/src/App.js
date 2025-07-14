import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './componet/Home';
import About from './componet/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
