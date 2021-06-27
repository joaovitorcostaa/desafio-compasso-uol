import React from "react"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm";
import { goToProfilePage } from "../../routes/coordinator";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DivContainer, DivInput, DivButton, Img } from "./styled"
import logo from "../../img/GitHub-Logo.png"
import axios from "axios";

export const SearchPage = () => {

    const history = useHistory()

    const initialForm = {
        nickname: ""
    }

    const [form, onChange, clear] = useForm(initialForm)

    const getUser = async(event) => {
        event.preventDefault()
        try {
            const user = await axios.get(`https://api.github.com/users/${form.nickname}`)
            goToProfilePage(history, form.nickname)
        } catch (error) {
            alert("Esse usuário não existe")
            clear()
        }
    }

    return (
        <DivContainer>
            <h1>Pesquise um usuário</h1>
            <Img alt="logo" src={logo} />
            <DivInput>
                <form onSubmit={getUser} >
                    <TextField
                        required
                        value={form.nickname}
                        name="nickname"
                        type="text"
                        onChange={onChange}
                        label="Nickname"
                        variant="standard"
                        color="secondary"
                    />
                    <DivButton>
                        <Button color="secondary" type="submit" variant="contained">pesquisar</Button>
                    </DivButton>
                </form>
            </DivInput>
        </DivContainer>
    )
}