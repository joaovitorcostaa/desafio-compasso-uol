import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { goToReposPage, goToStarredPage } from "../../routes/coordinator"
import { DivContainer, Img, Header, DivInfo, DivNav } from "./styled"
import Button from '@material-ui/core/Button';


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
            alert(error.response.data.message)
        }
    }

     const getStarred = async() => {
         try {
            const starred = await axios.get(`https://api.github.com/users/${nickname}/starred`)
            setStarred(starred.data)
         } catch (error) {
            alert(error.response.data.message)
         }
}

    return (<DivContainer>
        
        <Header>
            <h3>#{user.login}</h3>
            <Button variant= "contained" color = "primary">Voltar</Button>
        </Header>
        
        <DivInfo>
        <Img src={user.avatar_url} />
        <h2>{user.name}</h2>
        <h3>{user.bio}</h3>

        <DivNav>
        <p>followers: {user.followers}</p>
        <p>following: {user.following}</p>
        <h1>Starred</h1>
        <p onClick={() => goToStarredPage(history, user.login)}>Starred: {starred.length}</p>
        <Button variant= "contained" color = "primary" onClick={() => goToReposPage(history, user.login)}>{user.public_repos}</Button>
        </DivNav>

        </DivInfo>
    
    </DivContainer>
    )

}