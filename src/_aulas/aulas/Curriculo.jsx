import { DadosCandidato } from "../../componentes/aula/DadosCandidato.jsx";
import { DadosEndereco } from "../../componentes/aula/DadosEndereco.jsx";
import { DadosQualidade } from "../../componentes/aula/DadosQualidade.jsx";

function Curriculo() {
  const itensQualidades = [
    "quali 1",
    "quali 2",
    "quali 15",
    "quali 24",
    "quali 13",
    "quali 22",
  ];
  const candidato = { nome: "bruno", idade: 32, telefone: "21212" };

  return (
    <>
      <DadosCandidato meuObjeto={candidato} />
      <DadosCandidato
        meuObjeto={{ nome: "bruno", idade: 32, telefone: "21212" }}
      />
      <DadosEndereco />

      <DadosQualidade itensQualidade={itensQualidades} />
    </>
  );
}

export { Curriculo };
