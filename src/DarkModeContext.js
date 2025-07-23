import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkmode, setDarkmode] = useState(false);
  
    const toggleDarkMode = () => setDarkmode(prev => !prev);
  
    return (
      <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
  };

export const useDarkMode = () => useContext(DarkModeContext);