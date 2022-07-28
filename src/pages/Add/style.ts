import styled from "styled-components";

export const Container = styled.section`
background-color: #f1f1f1;
width: 100%;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;

img {
    width: 426.73px;
    height: 371.69px;
}

`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 70px;
color: antiquewhite;



form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    gap: 25px;

    label{
        
       

        input {
            
            width: 20rem;
            text-align: left;
            border: none;
            border-bottom: 2px solid #000;
            background-color: transparent;
            color: #000;
            outline: none;
            ::placeholder{
                font-size: 1rem;
            }


        }
        
    }

   


} 

h1 {
        font-size: 4rem;
        color: #000;
    }
`;