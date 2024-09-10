interface DisplayProps{
    valor:number
    fstate:any
}

export default function DisplayState(props:DisplayProps){
    function operacao(op:number){ 
        let c = props.valor //perceba que aqui eu estou acessando as propriedades do use state que estão dentro de props
        c += op
        props.fstate(c)
    }
    return (
        <div >
            <h4>{props.valor}</h4>
            <div className="flex gap-5">
                <button className="btncont" onClick={()=>operacao(1)}>Adicionar</button> {/*aqui podemos utilizar uma arrow function para retornar o erro que ele me retornaria por estar usando () */}
                <button className="btncont" onClick={()=>operacao(-1)}>Subtrair</button>
            </div>
        </div>
    )
}