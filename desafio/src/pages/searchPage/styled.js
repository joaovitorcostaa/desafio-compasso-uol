import styled from "styled-components"
import { primarycolor } from "../../constants/colors"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: ${primarycolor};
    color: white;
`

export const DivInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12px;
`

export const Img = styled.img`
    width: 35%;
    @media(max-width: 800px){
        width: 82%;
    }
`