import "./App.css";
//Components
import Messenger from "./components/Messenger";
import Accountprovider from "./components/context/Accountprovider";

function App() {
  return (
    <>
      <Accountprovider>
        <Messenger />
      </Accountprovider>
    </>
  );
}

export default App;
