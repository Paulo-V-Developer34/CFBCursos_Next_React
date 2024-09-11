//variáveis
const nome = "Paulo"
const curso = "Informática para internet"

export default function Aluno(){
  return (
    <div>
      <h1 className="bg-zinc-300 h-[40px]">{nome}</h1>{/*observe que em class name eu pude definir um tamanho específico no tailwind utilizando o [] ex. h-[40px] */}
      <h2>{curso}</h2>
      <br/>
    </div>
  )
}