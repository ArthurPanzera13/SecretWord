import { styled } from 'styled-components';

export const DivTitle = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledTitle = styled.h1`
    color: white;
    font-size: 60px;
    text-decoration: underline;

    @media (max-width: 799px){
        font-size: 20px;
    }
`;

export const StyledSubTitile = styled.h3`
    color: yellow;
`;

export const Container = styled.div`
    flex-direction: column;
    align-items: center;
    display: flex;

    p{
        color: white;
    }
`;

export const StyledButton = styled.button`
    margin-top: 2%;
    height: 50px;
    width: 150px;
    border-radius: 20px;
    background-color: yellow;
    border: 4px solid black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    transition: transform 0.3s ease; /* Adicionando uma transição suave */
    cursor: pointer;
    
    &:hover {
        transform: scale(1.02); /* Aumentando a escala em 10% */
    }
`;

export const StyledSmallText = styled.h3`
    color: white;
    display: flex;
    flex-direction: row;
`;

export const StyledLetras = styled.p`
    margin-top: -1%;

`;

export const StyledEndTitle = styled.h1`
    color: white;
    font-size: 50px;
`;

export const StyledInput = styled.input`
    border-radius: 2px;
    height: 50px;
    width: 40px;
    border: 3px solid yellow;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
`;

export const StyledDica = styled.span`
    color: yellow;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    gap: 20px;

    @media (max-width: 1499px){
        margin-top: -1%; 
    }
`;

export const StyledDivSpan = styled.span`
    margin: 1.5em;
    padding: 1.5em;
    border: 20px solid yellow;
    color: white;
    text-transform: uppercase;
    flex-direction: row;
    display: flex;

    @media (max-width: 1499px){
        padding: 0.3em; 
        margin-top: -1%;
    }

    @media (max-width: 799px){
        display: flex;
        flex-direction: column;
    }

`;

export const StyledSpan = styled.span`
    font-size: 70px;
    display: flex;
    /* visibility: ${({show})=>show ? "visible" : "hidden"}; */
    line-height: 1.5;
    border: 3px solid black;
    height: 100px;
    width: 100px;
    text-transform: uppercase;
    background-color: white;
    color: black;
    font-weight: bold;
    align-items: center;
    justify-content: center;

    @media (max-width: 799px){
        font-size: 10px;
        height: 50px;
    }
`;