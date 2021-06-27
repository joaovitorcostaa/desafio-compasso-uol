import styled from "styled-components"
import { primarycolor } from "../../constants/colors"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${primarycolor};
    color: white;
    height: 100vh;
    overflow: auto;
    `

export const DivButton = styled.div`
    margin-bottom: 6px;
`

export const DivBackButton = styled.div`
    height: 60%;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 10vh;
`