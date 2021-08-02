import Body from "./components/Buttons/Body";
import Inputs from "./components/InputFields/Inputs";
import SideBar from "./components/SideBar";
import "./styles/App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <SideBar />
      {/* <Body /> */}
      <Inputs />
      <Footer />
    </div>
  );
}

export default App;
