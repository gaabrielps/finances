
import Link from "next/link";
import  Router  from "next/router";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { TemplateContainer } from "../../components/templates";
import { Header} from "./style";

export function Dash(){

    const dados = [
        {id:"0", expense: "Netflix", category: "streaming", cost: 39.99},
        {id:"1", expense: "Prime Video", category: "streaming", cost: 9.99},
        {id:"2", expense: "Conta de Luz", category: "conta", cost: 39.99},
        {id:"3", expense: "SuperDesk", category: "boleto", cost: 1000.00}
    ]

    const forAddNewExpense = () => {
        Router.push('/dashboard/add')
    }

    return(
        <TemplateContainer>

        <Header>
            <h1><strong>Logo</strong></h1>
            <section>
                <Button onClick={forAddNewExpense} >Adicionar</Button>
                <Link href="/"><Button variant="ghost">Sair</Button></Link>
            </section>
        </Header>

        <main className="w-full bg-purple-800 max-w-screen-lg h-5/6 grid overflow-y-scroll  content-start grid-cols-3 gap-4 p-4">
            {dados?.map((item) => (
                <Card  key={item.id} expense={item.expense} category={item.category} cost={item.cost}/>
            ))}
           




    
        </main>
        </TemplateContainer>



    )
}


