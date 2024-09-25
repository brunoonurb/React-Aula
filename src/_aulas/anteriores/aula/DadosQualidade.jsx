import { ItensQualidade } from "./ItensQualidade";
import "./curriculo.css"
function DadosQualidade(props) {
  
  return (
    <div className="dadosqualidade">
      
      {
      props.itensQualidade.map((item) => {
        return  <ItensQualidade item={item}/>
      })
       }
      


    </div>
    );
}

export { DadosQualidade };
