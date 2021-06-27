import styled from "styled-components"
import {primarycolor} from "../../constants/colors"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: ${primarycolor};
    color: white;
    height: 100vh;
    overflow: auto;
    `