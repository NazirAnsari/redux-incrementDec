import "./App.css";
import CouterComponent from "./components/index";
import { Provider } from "react-redux";
import {store} from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CouterComponent />
      </Provider>
    </div>
  );
}

export default App;
