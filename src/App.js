import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";
import { RouteApp } from "./route";
import CarrinhoContextProvider from "./hooks/CarrinhoContext.js";
import { TesteContextProvider } from "./hooks/aula5/TesteContext.js";

function App() {
  return (
    <>
      <TesteContextProvider>
        <CarrinhoContextProvider>
          <ToastContainer />
          <RouteApp />
        </CarrinhoContextProvider>
      </TesteContextProvider>
    </>
  );
}

export default App;
