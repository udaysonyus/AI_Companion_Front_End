import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {

  const [converse, setConverse] = useState(false)
  const nav = useNavigate()

  const NavigateToConverse = () => {
    if(!converse){
      alert("Converse is not True")
      setConverse(true)
    }
    else {
      nav("/converse")
    }
    
  }


  return (
    <>
    <div>
      <h1>This is dashboard</h1>
      <button onClick={NavigateToConverse}>Converse</button>
    </div>
    </>

  )
}