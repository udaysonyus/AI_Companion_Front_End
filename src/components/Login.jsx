import { useState } from "react"
import {useNavigate} from "react-router-dom"

export const Login = () => {

  const [isNewUSer, setisNewUser] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState(
    [{"id" : 1,
      "email":"uday@gmail.com",
      "password":"uday"
    }]
  )

  const HandleSubmit = (e) => {

    e.preventDefault()

    const userFound = credentials.find(
      (cred) => cred.email === email && cred.password === password
    )

    userFound ? navigate("/dashboard") : alert("Invalid Credentails")
    
  }

  return (


    <div>
      <form onSubmit={(e) => {HandleSubmit(e)}}>
        <span>
          <label htmlFor="email">Enter Email</label>
          <input id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
        </span>
        <br />
        <span>
          <label htmlFor="password">Password</label>
          <input id="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
        </span>
        <br/>
        <button>Login</button>
      </form>
    </div>

  )
}