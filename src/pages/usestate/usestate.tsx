//importações
import { useState } from "react";
import DisplayState from "@/components/displayState";

//componente
export default function usestateteste(){
    const [cont, alterarcont]=useState<number>(0)

    function adicionar(){ //PERCEBA EU CONSEGUI PASSAR AS FUNÇÕES PARA OS COMPONENTES FILHOS
        let c = cont
        c++
        alterarcont(c)
    }
    function reduzir(){
        let c = cont
        c--
        alterarcont(c)
    }

    return (
        <div>
            <h2>Testando useState</h2>
            <DisplayState valor={cont} fadicionar={adicionar} fsubtrair={reduzir}></DisplayState>
        </div>
    )
}