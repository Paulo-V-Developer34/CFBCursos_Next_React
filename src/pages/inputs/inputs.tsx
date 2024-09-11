import { useState } from "react";
import logoescola from "@/components/topo";

const arrayc = ['PHP','Java','JavaScript','TypeScript','Angular','Next']

// const jsonc = [
//     {"curso":"PHP"},
//     {"curso":"Java"},
//     {"curso":"JavaScript"},
//     {"curso":"TypeScript"}
// ]

export default function Input(){
    const [nome, setnome] = useState<string>('')  //devemos utilizar useState para poder utilizar input dentro do react
    const [curso, setcurso] = useState<string>('')

    function fgeraroptions(){
        return arrayc.map((el,i:number)=>{
            return <option value={el} key={`opt${i}`}>{el}</option>
        })
    }

    // const vgeraroptions=jsonc.map((el,i)=>{ //essa faz a mesma coisa que a function porém sendo uma variável e iterando um JSON
    //     return <option value={el.curso} key={Math.random()*99999}>{el.curso}</option> //aqui é outra forma de gerar um ID
    // })

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
                        {
                            fgeraroptions() //vou gerar as opções usando uma função com map ou com uma constante
                        }
                    </select>
                </div>
                <br/>
                <h2>Nome digitado: {nome}</h2>
                <h2>Curso digitado: {curso}</h2>
            </div>
        </main>
        
    )
}