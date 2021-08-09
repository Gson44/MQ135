import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Main.css'
import {Link} from "react-router-dom";

const Main = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/user')
            .then(res=>{
                setUsers(res.data);
                
            });
    },[]);

    const onSubmitHandler = e => {
        e.preventDefault()
        console.log(typeof console.log(users[0].userName))
        console.log(typeof userName)
        if(users[0].userName === userName){
            if(users[0].password === password )
                {
                    console.log("Exist")
                    window.location.href='/loginin'
                    setStatus(true)
                }
            else{
                console.log("Doesnt exist")
            }
        }else{
            console.log("Doesnt exist")
        }
        if(status == true){

        }
    }

    return(
        <div className="mainDash">
            <h1>IOT MQ Gas Sensor</h1>
            <form className="loginForm">
                <div className="formLogin">
                    <label for="login" className="labelForm">Login</label> <br />              
                    <input type="text" className="inputForm" onChange={(e)=>setUserName(e.target.value)} value={userName}/><br />
                </div>
                <div className="formPassword">
                    <label for="password" className="labelForm">Password </label> <br /> 
                    <input type="text" className="inputForm" onChange={(e)=>setPassword(e.target.value)} value={password}/><br />
                </div>
                 <div className="formButton">
                    <button onClick={onSubmitHandler}>Submit</button>
                    
                    
                    <Link to="/signup">SignUp</Link>
                    
                  
                 </div>
            </form>
        
        </div>

    )
}

export default Main