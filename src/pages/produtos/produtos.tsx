//importações
import Card from "@/components/card"
import logoescola from "@/components/topo"

//funções
function calculardesc(valort:number,desc:number):number{
    return valort - (valort * (desc/100))
}

const listaprodutos = [
    {
      produto:'Pano Gamer', 
      valor:5, 
      desconto:0, 
      funcao:calculardesc
    },
    {
      produto:'Mouse Gamer', 
      valor:50, 
      desconto:20, 
      funcao:calculardesc
    },
    {
      produto:'Teclado Gamer', 
      valor:500, 
      desconto:50, 
      funcao:calculardesc
    },
    {
      produto:'Monitor Gamer', 
      valor:5000, 
      desconto:0, 
      funcao:calculardesc
    },
    {
      produto:'PC Gamer', 
      valor:50000, 
      desconto:5, 
      funcao:calculardesc
    }
  ]

export default function produtos(){
    return (
        <main>
            {logoescola()}
            <div className="flex justify-center gap-3">
                
                {/* percorrendo um array para transforma-los em elementos do DOM */}
                {
                    listaprodutos.map((el:any,i:number)=>{
                    return (
                        //eu inseri o "key" para indentificar cada componente
                        <Card key={i} produto={el.produto} valor={el.valor} desconto={el.desconto} funcao={el.funcao}>Edição de Natal</Card> /*estou enviando o props children dentro da tag card*/
                    )
                    })
                }
            </div>
        </main>
    )
}