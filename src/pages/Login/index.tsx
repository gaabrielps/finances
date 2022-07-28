import Link from 'next/link'

import { useState } from "react";
import { Button } from "../../components/button";

import { Container, Content } from "./style";



export function Login(){
    return(
        <Container>
            

            <div>
                <img src='/imgLogin.svg' alt="nada"  />
            </div>

            <Content>

                <h1><strong>Entrar</strong></h1>
                
                <form action="">
                    <label>
                        
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        
                        <input type="password" placeholder="Password" />
                    </label>
                    <Link href="/dashboard"><Button>Log in</Button></Link>
                    
                    <Link href="/register" className="text-lg" color="black">Criar conta</Link>
                </form>
            </Content>
        </Container>
        

    )
}