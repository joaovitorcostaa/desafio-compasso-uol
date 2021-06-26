import React from "react"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm";
import { goToProfilePage } from "../../routes/coordinator";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DivContainer, DivInput, DivButton, Img } from "./styled"
import logo from "../../img/GitHub-Logo.png"

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
        <DivContainer>
            <h1>Pesquise um usuário</h1>
            <Img alt= "logo" src={logo}/>
            <DivInput>
            <form onSubmit = {handleClick} >
                <TextField 
                required
                value = {form.nickname}
                name = "nickname"
                type = "text"
                onChange = {onChange}
                label = "Nickname"
                variant = "standard"
                color = "secondary"
                />
                <DivButton>
                <Button color= "secondary" type="submit" variant = "contained">pesquisar</Button>
                </DivButton>
            </form>
            </DivInput>
        </DivContainer>
    )
}