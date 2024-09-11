interface DisplayProps{
    valor:number
    fadicionar:()=>void
    fsubtrair:()=>void
}

export default function DisplayState(props:DisplayProps){
    return (
        <div >
            <h4>{props.valor}</h4>
            <div className="flex gap-5">
                <button className="btncont" onClick={props.fadicionar}>Adicionar</button>
                <button className="btncont" onClick={props.fsubtrair}>Subtrair</button>
            </div>
        </div>
    )
}