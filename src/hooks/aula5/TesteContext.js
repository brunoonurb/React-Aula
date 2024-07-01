import { createContext, useState } from "react";

// criar context
export const TesteContext = createContext();

// criar funcao que disponibiliza o provider
function TesteContextProvider({ children }) {

  // varivel que ficara disponivel no provider
  const [varTeste, setVarTeste] = useState("ESTOU VAZIO");

  // função que ficara disponivel no provider
  function manipulaVarTeste(valor) {
    setVarTeste(valor);
  }

   // função que ficara disponivel no provider
   function manipulaVarTesteParaeRuim() {
    setVarTeste('DEU RUIMMMMMM');
  }

  return (
    <TesteContext.Provider value={{ varTeste, manipulaVarTeste, manipulaVarTesteParaeRuim }}>
      {children}
    </TesteContext.Provider>
  );
}

export { TesteContextProvider };
