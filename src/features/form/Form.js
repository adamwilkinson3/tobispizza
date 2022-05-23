import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './form.css'

function 
Form() {
    const [login, setLogin] = useState(1)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("")
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")
        if (login) {
            if (userName === sessionStorage.getItem("userName") && password === sessionStorage.getItem("password")) {
                navigate("/")
            } else {
                setError("Wrong Username or Password")
            }
        } else {
            if (password === confirmPassword && password && userName) {
                sessionStorage.setItem("userName", userName)
                sessionStorage.setItem("password", password)
                navigate("/")
            } else if (!userName) {
                setError("Please enter a Username")
            } else if (!password) {
                setError("Please enter a Password")
            } else if (!confirmPassword) {
                setError("Please confirm Password")
            } else if (password != confirmPassword) {
                setError("Passwords do not match")
            }
        }
    }
   
  return (
    <div class="form">
        <div class="selector">
            <div class="option">
                    <input type="radio" value="Login" name="option" id="login" defaultChecked onClick={() => {setLogin(1); setUserName(''); setPassword(''); setConfirmPassword('');}} />
                    <label for="login">Login</label>
                    <input type="radio" value="Register" name="option" id="register" onClick={() => {setLogin(0); setUserName(''); setPassword(''); setConfirmPassword('');}} />
                    <label for="register">Register</label>
            </div>
        </div>
        <form>
            <div class="input-container">
                <div class="input">
                    <label class="userName">
                        Username: 
                        <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} />
                    </label>
                    <label class="password">
                        Password:
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    </label>
                    {login ? null : 
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
                    </label>}
                </div>
                <p class="error">{error}</p>
            </div>
            <div class="submit">
                <button onClick={e => handleSubmit(e)}>{login ? <>Login</> : <>Register</>}</button>
            </div>
        </form>
    </div>
  )
}

export default Form