import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { goToReposPage, goToStarredPage } from "../../routes/coordinator"
import { DivContainer, Img, Header, DivInfo, DivNav, Bio } from "./styled"
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
            <Button variant= "contained" color = "secondary">Voltar</Button>
        </Header>
        
        <DivInfo>
        <Img src={user.avatar_url} />
        <h1>{user.name}</h1>

        <Bio>
        <h3>{user.bio}</h3>
        </Bio>

        <DivNav>
        <p>followers: {user.followers}</p>
        <p>following: {user.following}</p>
        <Button variant= "contained" color = "secondary"  onClick={() => goToStarredPage(history, user.login)}>{starred.length} repositório(s) starred</Button>
        <Button variant= "contained" color = "secondary" onClick={() => goToReposPage(history, user.login)}>{user.public_repos} repositório(s)</Button>
        </DivNav>

        </DivInfo>
    
    </DivContainer>
    )

}