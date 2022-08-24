import React, { useState } from 'react'
import axios from 'axios'
import {domain} from '../env'

const LoginPage = () => {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    
    const loginrequest = async()=>{
        await axios({
            method:"post",
            url:`${domain}/api/login/`,
            data:{
                'username':username,
                'password':password
            }
        }).then(response=> {
            console.log(response.data['token']);
            window.localStorage.setItem("token",response.data['token'])
        }).catch(_=>{
            alert("Your Username or Password is wrong!! Try again")
        })
    }


  return (
    <div className="container mt-4">
        <h1>LoginPage</h1>
        <div class="form-group">
    <label>Username</label>
    <input onChange={(e)=>setUsername(e.target.value)} type="text" class="form-control" placeholder="Username"/>
  </div>
  <div class="mb-3">
    <label>Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder="Password"/>
  </div>
  <button onClick={loginrequest} className="btn btn-success">Login</button>
  



    </div>
  )
}

export default LoginPage