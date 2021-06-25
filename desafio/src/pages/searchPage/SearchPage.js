import React from "react"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm";
import { goToProfilePage } from "../../routes/coordinator";

export const SearchPage = () => {

    const history = useHistory()

    const initialForm = {
        nickname: ""
    }

    const [form, onChange] = useForm(initialForm)

    const handleClick = (event) => {
        event.preventDefault()
        goToProfilePage(history, form.nickname)
    }

    return (
        <div>
            <form onSubmit = {handleClick} >
                <input 
                required
                value = {form.nickname}
                name = "nickname"
                type = "text"
                onChange = {onChange}
                label = "nickname"
                />
                <button type="submit">pesquisar</button>
            </form>
        </div>
    )
}