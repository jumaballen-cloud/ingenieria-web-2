import {Sesion} from "./context/Sesion";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Sesion><App /></Sesion>
  </BrowserRouter>
);
