
import { useState } from 'react';
import { Header } from './Components/Header/Index';
import { ThemeContext, ThemeContextType }  from "./Context/ThemeContext/ThemeContext";
import  { DentistProvider }  from "./Context/NameContext/NameContext"
import { Footer } from './Components/Footer/Index';
function App() {
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <DentistProvider>
        <Header/>
        <Footer/>
      </DentistProvider>
    </ThemeContext.Provider>
      
  );
}

export default App;
