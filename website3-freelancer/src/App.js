import NavigationBar from "./Components/Navigation/NavigationBar";
import Main from "./Components/MainAndFooter/Main"
import "./Components/globalStyles.css";

const App = () => {
  return (
    <>
      <NavigationBar />
      <div>
        <Main />
      </div>
    </>
  );
};

export default App;
