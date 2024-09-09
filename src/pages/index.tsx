import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


// function mudarnome(novoNome:string):void{  //essa function não consegue acessar a variável "nome" pois ela está em um escopo à frente, lembre-se disso, isso pode te ajudar
//   nome = novoNome    
// }

export default function Home() {

  //variáveis
  let nome = "Paulo"
  let curso = "Informática para internet"

  function Apresentacao(){
    return (
      <div>
        <h1>{nome}</h1>
        <h2>{curso}</h2>
        <br/>
      </div>
    )
  }

  function logoescola(){
    return (
      <div className="flex space-between"> {/*aqui podemos chamar o tailwind ou o css normal */}
        <div>Marechal</div>
        <div>do</div>
        <div>Ar</div>
      </div>
    )
  }


  //POSSO COLOCAR VÁRIOS CÓDIGOS AQUI, MAS HAVERÁ APENAS 1 RETURN

  return ( //O RETURN DEVE RETORNAR APENAS 1 TAG  //eu utilizo {variavel} para poder inserir variáveis dentro do meu html
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Apresentacao/> {/*isso é um componente, componenetes só podem ser chamados se possuirem a primeira letra sendo maiúscula*/}
        {logoescola()} {/*Posso chamar um componente dessa forma também */}
        <div>JS</div>
        <div>NEXT</div>
        <div>{nome}</div> 
        <div>REACT</div>
    </main>
  );
}
