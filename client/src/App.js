import "./App.css";
//Components
import Messenger from "./components/Messenger";
import Accountprovider from "./components/context/Accountprovider";
import TemplateProvider from "./theme/TemplateProvider";
function App() {
  return (
    <>
      <TemplateProvider>
        <Accountprovider>
          <Messenger />
        </Accountprovider>
      </TemplateProvider>
    </>
  );
}

export default App;
