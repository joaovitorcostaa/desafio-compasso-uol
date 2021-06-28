import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { DivContainer, Header } from "./styled"
import { Button } from "@material-ui/core"
import { goToProfilePage } from "../../routes/coordinator"
import { Card } from "../../components/card/Card"

export const ReposPage = () => {
    const history = useHistory()

    const { nickname } = useParams()

    const [repos, setRepos] = useState([])

    useEffect(() => {
        getRepos()
    }, [])

    const getRepos = async () => {
        try {
            const repos = await axios.get(`https://api.github.com/users/${nickname}/repos`)
            setRepos(repos.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const reposList = repos && repos.map((repo) => {
        return (<Card key={repo.name} name={repo.name} />)
    })

    return <DivContainer>
        <Header>
            <h2>Repositórios</h2>
            <Button onClick={() => goToProfilePage(history, nickname)} variant="contained" color="secondary">Voltar</Button>
        </Header>
        {repos[0] ? reposList : <h1>Nenhum repositório encontrado</h1>}

    </DivContainer>
}