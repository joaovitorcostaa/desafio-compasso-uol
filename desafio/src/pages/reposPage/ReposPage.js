import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

export const ReposPage = () => {
    const history = useHistory()

    const {nickname} = useParams()
    
    const [repos, setRepos] = useState([])

    useEffect(() => {
        getRepos()
    },[])

    const getRepos = async () => {
        try {
            const repos = await axios.get(`https://api.github.com/users/${nickname}/repos`)
            setRepos(repos.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return <div>
        {repos && repos.map((repo) => {
            return (<div>
                <p>{repo.name}</p>
                </div>)
        })}
    </div>
}