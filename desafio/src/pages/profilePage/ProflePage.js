import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { goToReposPage } from "../../routes/coordinator"

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

    return (<div>
        <img src={user.avatar_url} />
        <p>{user.name}</p>
        <p>{user.login}</p>
        <p>followers: {user.followers}</p>
        <p>following: {user.following}</p>
        <h1>Starred</h1>
        <p>Starred: {starred.length}</p>
        <h1>Repositórios</h1>
        <p onClick={() => goToReposPage(history, user.login)}>{user.public_repos}</p>
    </div>)

}