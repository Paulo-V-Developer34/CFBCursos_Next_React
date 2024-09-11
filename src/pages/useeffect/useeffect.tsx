import logoescola from "@/components/topo"
import { useState, useEffect } from "react"

export default function Usedefaulttest(){
    const [num,setnum] = useState<number>(0)

    // useEffect(()=>{ //useEffect é executado sempre que o useState for chamado
    //     let c = num     //aqui é um loop infinito// nunca faça isso ;-; nunca faça isso
    //     c++
    //     setnum(c)
    // })
    const addnum = ()=>{
        let c = num
        c ++
        setnum(c)
    }

    useEffect(()=>{
        alert("Você adicionou 1 ao contador")
    },[setnum]) //tudo dentro do colchetes indica que o useEffect só funcionará na primeira vez que o for indicado for rendenizado (apenas useState)

    return (
        <div>
            {logoescola()}
            <h1>Contador</h1>
            <h2>{num}</h2>
            <button onClick={addnum}>Aumentar</button>
        </div>
    )
}