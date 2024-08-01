import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux-store/store";
import AppRoutes from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
