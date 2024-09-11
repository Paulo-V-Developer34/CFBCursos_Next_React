import logoescola from "@/components/topo"
import { useState } from "react"

const carros = [
    {id:1, categ:'Esporte',valor:50000},
    {id:2, categ:'Esporte',valor:450000},
    {id:3, categ:'Suv',valor:30000},
    {id:4, categ:'Suv',valor:350000},
    {id:5, categ:'Utilitário',valor:250000},
    {id:6, categ:'Utilitário',valor:150000}
]

interface carrosi {
    id:number
    categ:string
    valor:number
}

export default function Selecttest(){
    const [categ,setcateg] = useState<string>("")
    const [lista,setlista] = useState<JSX.Element[]>([])

    // useEffect((
    //     fetch('https://kdkdaj')     aqui o useEffect será executado apenas na primeira vez que o usuário chegar na página, fará uma conexão e gardará o resultado em um array (carros), mas não o utilizarei pois não tenho uma API ;-;
    //     .then(res=>res.json())
    //     .then(res=>carros=res)
    // ),[])
    // function filtrar(categ:any){
    //     setcateg(categ)
    //     let l=carros.filter((el,i)=>{            por algum motivo esse código não funciona
    //         if(el.categ == categ){

    //             return <div>
    //                 <div>ID: {el.id}</div>
    //                 <div>Categoria: {el.categ}</div>
    //                 <div>Valor: {el.valor}</div>
    //             </div>
    //         }
    //     })
    //     setlista(l)
    // }

    function filtrar(categ:string
    ){
        setcateg(categ)
        const l:JSX.Element[]=[]
        carros.forEach((el:carrosi)=>{
            if(el.categ == categ){
                l.push(
                    <div className="flex flex-row w-[500px] gap-3">
                        <div>ID: {el.id}</div>
                        <div>Categoria: {el.categ}</div>
                        <div>Valor: {el.valor}</div>
                    </div>
                )
            }
        })
        setlista(l)
    }


    return (
        <div>
            {logoescola()}
            <div>
                <h2>selecione uma categoria</h2>
                <select value={categ} onChange={(evt)=>{filtrar(evt.target.value)}}>
                    <option value="">Nenhum</option>
                    <option value="Esporte">Esportivo</option>
                    <option value="Suv">Suv</option>
                    <option value="Utilitário">Utilitário</option>
                </select>
                {lista}
            </div>
        </div>
    )
}