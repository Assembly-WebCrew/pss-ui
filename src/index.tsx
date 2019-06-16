import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import fi from "date-fns/locale/fi";

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>
      <App />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
