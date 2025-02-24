
import { useState } from 'react';
import { Header } from './Components/Header/Index';
import { ThemeContextType }  from "./Context/ThemeContext/ThemeContext";
import { Footer } from './Components/Footer/Index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContactPage } from './Pages/Contact/Index';
import { AboutUsPage } from './Pages/About-us/Index';
import { HomePage } from './Pages/Home/Index';
import './App.css';

function App() {
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
      <div id='body'>

        <Router>
          <div id='padding'></div>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about-us" element={<AboutUsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>

        </Router>
        <Footer/>
      </div>
      
  );
}

export default App;
