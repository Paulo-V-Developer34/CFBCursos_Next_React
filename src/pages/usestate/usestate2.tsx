//importações
import { useState } from "react";
import DisplayState from "@/components/displayState2";
import logoescola from "@/components/topo";

//componente
export default function Usestateteste(){
    const [cont, alterarcont]=useState<number>(0) /*aqui eu estou usando o use state para poder atualizar os valores automaticamente */

    return (
        <div>
            {logoescola()}
            <h2>Testando useState</h2>
            <DisplayState valor={cont} fstate={alterarcont}></DisplayState> {/*estou enviando o próprio useState */}
        </div>
    )
}