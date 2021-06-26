import styled from "styled-components"
import {secondarycolor} from "../../constants/colors"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${secondarycolor};
    color: white;
    `
export const Img = styled.img`
    width: 15%;
    border-radius: 50%;
    @media(max-width: 460px){
        width: 45%;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 10vh;
`
export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 100%;
    align-items: center;
    flex-direction: column;
`

export const DivNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    flex-wrap: wrap;
    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    align-items: center;
    }
`