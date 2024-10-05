import { useContext } from "react";
import {ThemeContext} from './useContextHook'
const Toolbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <div>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          Current Theme: {theme} (Click to toggle)
        </button>
      </div>
    );
  };

  export default Toolbar;