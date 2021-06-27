import {DivContainer} from "./styled"
import React from "react"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router"
import {goToSearchPage} from "../../routes/coordinator"

export const ErrorPage = () => {
    const history = useHistory()

    return <DivContainer>
        <h1>Essa página não existe!</h1>
        <Button variant = "contained" color = "secondary" onClick={() => goToSearchPage(history)}>Voltar</Button>
    </DivContainer>
}