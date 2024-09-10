interface cardProps { //agora cardProps é um tipo e isso é muito útil
    produto: string
    valor:number
    desconto:number
    funcao:any 
    children?:any//é opcional
}

export default function Card(props:cardProps){
    return (
        <div className={`flex flex-col border-4 ${props.desconto>0?'border-red-500':'border-blue-500'} rounded-sm`}>{/*transformei o className em um template string para utilizar JS */}
            <div>Nome: {props.produto}</div> {/*sempre que formos utilizar JS devemos utilizar {} */}
            <div>Preço: R${props.valor}</div>
            {props.desconto>0&&
                <div>
                    <div>Desconto: {props.desconto}%</div>
                    <div>Preço com desconto: R${props.funcao(props.valor,props.desconto)}</div>
                    <div>Edição: {props.children}</div> {/*estou obrigando-o a pegar apenas o primeiro elemento visto que dos filhos, pois ele pode conter vários filhos*/}
                </div>
            }{/*estou inserindo JS */}
        </div>
    )
}