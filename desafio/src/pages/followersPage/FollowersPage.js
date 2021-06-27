import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Button } from "@material-ui/core"
import { goToProfilePage } from "../../routes/coordinator"
import { CircularProgress } from "@material-ui/core"
import { DivContainer, DivButton, Header, DivBackButton } from "./styled"

export const FollowersPage = () => {

    const history = useHistory()

    const [followers, setFollowers] = useState([])

    useEffect(() => {
        getFollowers()
    }, [])

    const { nickname } = useParams()

    const getFollowers = async () => {
        try {
            const followers = await axios.get(`https://api.github.com/users/${nickname}/followers`)
            setFollowers(followers.data)
        } catch (error) {
            alert(error.message)
        }
    }

    const followersList = followers && followers.map((follower) => {
        return <DivButton key = {follower.login}> <Button variant="contained" color="secondary" onClick={() => goToProfilePage(history, follower.login)}>{follower.login}</Button> </DivButton>
    })

    return <DivContainer>
        <Header>
            <h3>Seguidores</h3>
           <DivBackButton> <Button variant="contained" color="secondary" onClick = {() => goToProfilePage(history, nickname)} >Voltar</Button> </DivBackButton> 
        </Header>
        {followers ? followersList : <CircularProgress color="secondary" />}
    </DivContainer>
}