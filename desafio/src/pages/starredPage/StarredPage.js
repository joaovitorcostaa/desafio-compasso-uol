import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { goToProfilePage } from "../../routes/coordinator"
import { DivContainer, Header } from "./styled"
import { Button } from "@material-ui/core"
import { Card } from "../../components/card/Card"

export const StarredPage = () => {
    const history = useHistory()

    useEffect(() => {
        getStarred()
    }, [])

    const { nickname } = useParams()

    const [starred, setStarred] = useState([])

    const getStarred = async () => {
        try {
            const starred = await axios.get(`https://api.github.com/users/${nickname}/starred`)
            setStarred(starred.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const starredList = starred && starred.map((starred) => {
        return (<Card key={starred.name} name = {starred.name}/>)})

    return (<DivContainer>
        <Header>
        <h2>Starreds</h2>
        <Button onClick={() => goToProfilePage(history, nickname)} variant="contained" color="secondary">Voltar</Button>
        </Header>
        {starred[0] ? starredList : <h1>Nenhum repositório com estrela encontrado</h1>}
    </DivContainer>)
}