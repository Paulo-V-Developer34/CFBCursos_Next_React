interface cardProps { //agora cardProps é um tipo e isso é muito útil
    produto: string
    valor:number
    desconto:number
}

export default function Card(props:cardProps){
    return (
        <div className="flex flex-col border border-red-500 rounded-sm">
            <div>Nome: {props.produto}</div> {/*sempre que formos utilizar JS devemos utilizar {} */}
            <div>Preço: R${props.valor}</div>
            <div>Desconto: {props.desconto}%</div>
        </div>
    )
}