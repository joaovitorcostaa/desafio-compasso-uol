import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { goToFollowersPage, goToFollowingPage, goToReposPage, goToSearchPage, goToStarredPage } from "../../routes/coordinator"
import { DivContainer, Img, Header, DivInfo, DivNav, Bio, DivButton } from "./styled"
import Button from '@material-ui/core/Button';
import { CircularProgress } from "@material-ui/core"


export const ProfilePage = () => {
    const history = useHistory()

    const { nickname } = useParams()

    const [user, setUser] = useState({})
    const [starred, setStarred] = useState({})

    useEffect(() => {
        getUser()
        getStarred()
    }, [])


    const getUser = async () => {
        try {
            const user = await axios.get(`https://api.github.com/users/${nickname}`)
            setUser(user.data)
        } catch (error) {
            goToSearchPage(history)
            alert("This user doesn't exist")
        }
    }

    const getStarred = async () => {
        const starred = await axios.get(`https://api.github.com/users/${nickname}/starred`)
        setStarred(starred.data)
    }

    return (<DivContainer>
        <Header>
            <h3>#{user.login}</h3>
            <DivButton>
                <Button onClick={() => goToSearchPage(history)} variant="contained" color="secondary">Voltar</Button>
            </DivButton>
        </Header>
        <DivInfo>
            {user.avatar_url ? <Img src={user.avatar_url} /> : <CircularProgress color="secondary" />}
            <h1>{user.name}</h1>
            <Bio>
                <h3>{user.bio}</h3>
            </Bio>
            <DivNav>
                <Button variant="contained" color="secondary" onClick={() => goToFollowersPage(history, user.login)}>Seguidores: {user.followers} usuário(s)</Button>
                <Button variant="contained" color="secondary" onClick={() => goToFollowingPage(history, user.login)}>Seguindo: {user.following} usuário(s)</Button>
                <Button variant="contained" color="secondary" onClick={() => goToStarredPage(history, user.login)}>{starred.length} repositório(s) estrelado(s)</Button>
                <Button variant="contained" color="secondary" onClick={() => goToReposPage(history, user.login)}>{user.public_repos} repositório(s)</Button>
            </DivNav>
        </DivInfo>
    </DivContainer>
    )

}