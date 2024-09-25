import { ToastContainer } from "react-toastify";
import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import CarrinhoContextProvider from "./hooks/CarrinhoContext.js";
import { RouteApp } from "./route";

function App() {
  return (
    <>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;
