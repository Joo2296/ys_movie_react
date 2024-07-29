import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Detail from "./pages/Detail"
import Navigation from "./components/Navigation"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/ys_movie_react/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail" element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;