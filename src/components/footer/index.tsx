import { Container, Content } from "./style";
import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'


export function Footer(){
    return(
        <Container>
            <Content>
                <a href="https://www.linkedin.com/in/gabriellopesaraujo/"><FaLinkedin/></a>
                <a href="https://www.linkedin.com/in/gabriellopesaraujo/"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/gabriellopesaraujo/"><FaInstagram/> </a>          
            </Content>


            <h1>2022@todos os direitos reservados</h1>
        </Container>
    )
}