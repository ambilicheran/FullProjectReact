import classes from "./LightDarkMode.module.css";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={classes.lightDarkMode} data-theme={theme}>
      <div className={classes.container}>
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
