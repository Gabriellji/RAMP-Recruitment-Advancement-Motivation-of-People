import React, {useState, useContext} from 'react'
import {Context} from '../context'

import {Title, Text, Input, Button} from '../components/atoms'

export const Login = () => {
    //context
    const {doLogin, loginFailed, inputLogin} = useContext(Context)
    //state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //functions
    const changeEmail = (email) => {
        inputLogin()
        setEmail(email)
    }
    const changePassword = (password) => {
        inputLogin()
        setPassword(password)
    }
    const submit = (e, email, password) => {
        e.preventDefault();
        doLogin(email, password)
    }
    return(
        <form
        onSubmit={(e)=>submit(e, email, password)}
        >
            <Title
            text="Login"
            />
            {loginFailed && <Text
            text="try again"
            />}
            <Text
            text="email"
            />
            <Input
            placeholder="email"
            onChange={(value)=>changeEmail(value)}
            />
            <Text text="password"/>
            <Input
            placeholder="password"
            onChange={(value)=>changePassword(value)}
            type="password"
            />
            <Button 
            text="button"
            action={(e)=>submit(e, email, password)}/>
        </form>
    )
}

export default Login;