import { useState } from "react";
import logoescola from "@/components/topo";

export default function input(){
    let [nome, setnome] = useState<string>('')  //devemos utilizar useState para poder utilizar input dentro do react
    let [curso, setcurso] = useState<string>('')
    return (
        <main>
            {logoescola()}
            <div className="bg-slate-500">
                <div>
                    <label>Nome:</label>
                    <input className="border border-black" type="text" value={nome} onChange={(evt)=>{setnome(evt.target.value)}}></input> {/*devemos usar onChange para poder fazer a alteração*/}
                </div>
                <div>
                    <label>Curso:</label>
                    <select className="border border-black" value={curso} onChange={(evt)=>{setcurso(evt.target.value)}}>
                        <option value=""></option>
                        <option value="PHP">PHP</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                    </select>
                </div>
                <br/>
                <h2>Nome digitado: {nome}</h2>
                <h2>Curso digitado: {curso}</h2>
            </div>
        </main>
        
    )
}