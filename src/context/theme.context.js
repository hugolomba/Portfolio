import { createContext, useState } from "react";
import backgroundDark from "../img/cool-background.png";
import backgroundLight from "../img/cool-background-2.png";

const ThemeContext = createContext();

// CREATE A WRAPPER COMPONENT
function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState("");
  const body = document.body;

  const toggleTheme = () => {
    if (theme === "") {
      body.style.backgroundImage = `url(${backgroundLight})`;
      setTheme("light-mode");
    } else {
      body.style.backgroundImage = `url(${backgroundDark})`;
      setTheme("");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper };
