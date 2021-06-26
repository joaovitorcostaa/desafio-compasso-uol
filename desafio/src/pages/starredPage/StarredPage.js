import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

export const StarredPage = () => {
    const history = useHistory()

    useEffect(() => {
        getStarred()
    },[])

    const { nickname } = useParams()

    const [starred, setStarred] = useState([])

    const getStarred = async() => {
        try {
           const starred = await axios.get(`https://api.github.com/users/${nickname}/starred`)
           setStarred(starred.data)
        } catch (error) {
           alert(error.response.data.message)
        }
}

    return (<div>
        {starred && starred.map((starred)=> {
    return (<div>
        <p>{starred.name}</p>
    </div>)
} )}
</div>)
}