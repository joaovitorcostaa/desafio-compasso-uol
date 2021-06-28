import styled from "styled-components";
import { primarycolor } from "../../constants/colors"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${primarycolor};
    color: white;
    justify-content: center;
    height: 100vh;
`