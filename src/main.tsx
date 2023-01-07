import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter> {/** Componentes de alto orden. Dentro tiene otros componentes. */}
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
