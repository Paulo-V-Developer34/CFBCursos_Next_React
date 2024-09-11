import Link from "next/link";

export default function logoescola(){
    return (  
      <div>
        <div className="flex justify-between items-center bg-zinc-300 h-[100px] textogrande"> {/*aqui podemos chamar o tailwind ou o css normal */}
          <div>Marechal</div>
          <div>do</div>
          <div>Ar</div>
        </div>
        <nav className="flex gap-5 justify-center">
          {/* <Link href={
            {
              pathname:'/test/test2',
              query:{nome:"Paulo",curso:"Infonet"}
            }
          }>
            Teste
          </Link> */}
          <Link href={'/produtos/produtos'}>produtos</Link>
          <Link href={'/usestate/usestate2'}>Contador</Link>
          <Link href={'/inputs/inputs'}>Input</Link>
          <Link href={'/useeffect/useeffect'}>useEffect</Link>
          <Link href={'/select/select'}>Select</Link>
          <Link href={'/'}>Home</Link>
        </nav>
      </div>
    )   
  }