import "./App.css";
import { Competencias } from "./componentes/Competencias";
import { MeuCard } from "./componentes/aula1/MeuCard";
import { Nome } from "./componentes/Nome";
import { Resumo } from "./componentes/Resumo";

function App() {
  return (
    <div className="App">
      <Nome />
      <Resumo>
        Um resumo sobre como funciona o react no dia da empresa de tecnologias
      </Resumo>

      <Competencias nome="CSS" descricao="CSS usado pa da formas" />
      <Competencias nome="HTML" descricao="Estrutura basica" />

      <MeuCard minhaCor="black" />
      <MeuCard minhaCor="red" />
      <MeuCard corFundoClass="primary" />
      <MeuCard corFundoClass="sucesso" />
    </div>
  );
}

export default App;
