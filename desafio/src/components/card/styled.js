import styled from "styled-components";
import {secondarycolor} from "../../constants/colors"

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: ${secondarycolor};
    margin-bottom: 6px;
    border-radius: 36px;
    @media(max-width: 800px){
        width: 80%;
    }
`