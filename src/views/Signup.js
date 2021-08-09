import React, {useState } from 'react'
import axios from 'axios'
//import './Signup.css'
import {Link} from 'react-router-dom'
const Signup = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/signup', {userName , password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
            <div className="mainDash">
                <h1>Sign Up</h1>
                <form className="loginForm" onSubmit={onSubmitHandler}>
                    <div className="formLogin">
                        <label for="login" className="labelForm">Username</label> <br />              
                        <input type="text" className="inputForm" onChange={(e)=>setUserName(e.target.value)} value={userName} /><br />
                    </div>
                    <div className="formPassword">
                        <label for="password" className="labelForm">Password </label> <br /> 
                        <input type="text" className="inputForm" onChange={(e)=>setPassword(e.target.value)} value={password}/><br />
                    </div>
                     <div className="formButton">
                        <input type="submit" id="submit"/>
                        <Link to="/" id="formSignUp">Back</Link>
                     </div>
                </form>
            </div>
        )
    
}

export default Signup