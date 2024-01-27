import { Provider } from "react-redux";
import Contador from "./components/Contador";
import { store } from "./storeRedux/store";

function App() {
  return (
    <> 
      <Provider store={store}>
        <h2>REDUX CONTADOR</h2>
        <Contador />
      </Provider>
    </>
  );
}

export default App;
