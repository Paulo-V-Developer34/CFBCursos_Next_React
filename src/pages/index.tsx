// import Image from "next/image";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

//importações
import logoescola from "@/components/topo";
import Aluno from "@/components/aluno";



// function mudarnome(novoNome:string):void{  //essa function não consegue acessar a variável "nome" pois ela está em um escopo à frente, lembre-se disso, isso pode te ajudar
//   nome = novoNome    
// }

export default function Home() {

  //removi essas variáveis daqui e as coloquei em components

  // function logoescola(){
  //   return (  
  //     <div className="flex justify-between items-center bg-zinc-300 h-[100px]"> {/*aqui podemos chamar o tailwind ou o css normal */}
  //       <div>Marechal</div>
  //       <div>do</div>
  //       <div>Ar</div>
  //     </div>
  //   )   
  // }

  //objetos e arrays
  const supercss = { //posso atribuir css à objetos (bibliotecas (conjunto chave-valor))
    color: '#fff',
    backgroundColor: '#f0f'
  }



  

  //POSSO COLOCAR VÁRIOS CÓDIGOS AQUI, MAS HAVERÁ APENAS 1 RETURN

  return ( //O RETURN DEVE RETORNAR APENAS 1 TAG  //eu utilizo {variavel} para poder inserir variáveis dentro do meu html
    <main>
        {logoescola()} {/*Posso chamar um componente dessa forma também */}
        <div style={{color:'#f00',backgroundColor:'blue'}}>JS</div> {/*posso alterar o CSS inline utilizando {{}} ao invés de '' */}
        <Aluno/> {/*isso é um componente, componenetes só podem ser chamados se possuirem a primeira letra sendo maiúscula*/}
        <div style={supercss}>NEXT</div> {/*aqui eu não precisei usar {} novamente por que estou usando um objeto que no caso já possui outro {} */}
        <div>PHP</div> 
        <div>REACT</div>
        <br/>
    </main>
  );
}
