import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Button } from "@material-ui/core"
import { goToProfilePage } from "../../routes/coordinator"
import { CircularProgress } from "@material-ui/core"
import { DivContainer, DivButton, Header, DivBackButton } from "./styled"

export const FollowingPage = () => {

    const history = useHistory()

    const [following, setFollowing] = useState([])

    useEffect(() => {
        getFollowing()
    }, [])

    const { nickname } = useParams()

    const getFollowing = async () => {
        try {
            const following = await axios.get(`https://api.github.com/users/${nickname}/following`)
            setFollowing(following.data)
        } catch (error) {
            alert(error.message)
        }
    }

    const followingList = following && following.map((following) => {
        return <DivButton key = {following.login}> <Button variant="contained" color="secondary" onClick={() => goToProfilePage(history, following.login)}>{following.login}</Button> </DivButton>
    })

    return <DivContainer>
    <Header>
        <h3>Seguindo</h3>
       <DivBackButton> <Button variant="contained" color="secondary" onClick = {() => goToProfilePage(history, nickname)}>Voltar</Button> </DivBackButton> 
    </Header>
    {following ? followingList : <CircularProgress color="secondary" />}
</DivContainer>
}