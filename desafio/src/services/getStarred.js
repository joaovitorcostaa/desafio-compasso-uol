import axios from "axios"

export const getStarred = async(nickname) => {
        const starred = await axios.get(`https://api.github.com/users/${nickname}/starred`)
        // console.log(starred.data.length)
        return (starred.data)
}