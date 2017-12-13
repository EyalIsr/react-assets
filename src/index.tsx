import * as React from "react";
import * as ReactDOM from "react-dom";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import App from "./App";
import { createStores } from "./stores";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

useStrict(true);

const stores = createStores();

ReactDOM.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
