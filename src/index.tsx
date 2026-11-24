import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// (Optional) Redux and other providers
import { Provider } from "react-redux";
import persistentStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
if (!container) throw new Error("Root container missing in index.html");

const root = createRoot(container);

root.render(
  <Provider store={persistentStore.store}>
    <PersistGate loading={null} persistor={persistentStore.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
