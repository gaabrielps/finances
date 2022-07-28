import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { Container, Content } from "./style";


export function CreateAcconunt() {
    return (
        <Container>
        <div>
            <img src='/imgLogin.svg' alt="nada"  />
        </div>

        <Content>

            <h1><strong>Crie sua Conta</strong></h1>
            
            <form action="">
                <label>
                    
                    <input type="email" placeholder="Email" />
                </label>
                <label>
                    
                    <input type="password" placeholder="Password" />
                </label>
                <Link href="/"><Button  className="text-gray-100">Criar conta</Button></Link>
                <Link href="/" className="text-sm">Já possuo uma conta</Link>
            </form>
        </Content>
    </Container>

    )
}