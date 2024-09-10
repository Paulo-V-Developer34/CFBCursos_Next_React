import { useRouter } from "next/router"
import logoescola from "@/components/topo"


export default function test(){
    const router = useRouter()
    const parametros = router.query
    return (
        <div>
            {logoescola()}
            <h1>TESTE</h1>
            <br/>
            <h2>{parametros.nome}</h2>
            <h2>{parametros.curso}</h2>
        </div>

    )
}