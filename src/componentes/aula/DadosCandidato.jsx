
import "./curriculo.css"
function DadosCandidato(props) {
  console.log(props.meuObjeto);
  return (
    <div className="dadosCandidato">
      {props.meuObjeto.nome}<br/>
      {props.meuObjeto.idade}<br/>
      {props.meuObjeto.telefone}<br/>
    </div>
    );
}

export { DadosCandidato };
