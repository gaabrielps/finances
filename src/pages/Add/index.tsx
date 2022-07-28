import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { Container, Content } from "./style";

export function AddCard() {
    return (
        <Container>
            

        <div>
            <img src='/imgLogin.svg' alt="nada"  />
        </div>

        <Content>

            <h1><strong>Adicionar</strong></h1>
            
            <form action="">
                <label>
                    <input type="text" placeholder="Despesa" />
                </label>
                <label>
                    <input type="text" placeholder="Categoria" />
                </label>
                <label>
                    <input type="number" placeholder="Valor" />
                </label>
                <Button>Adicionar</Button>
                <Link href="/dashboard" className="text-sm" >Voltar</Link>
            </form>
        </Content>
    </Container>
    

    )
}