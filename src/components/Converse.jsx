import { useState } from "react"
import axios from 'axios'
import "../css/converse.css"

export const Converse = () => {

  const [threads, setThreads] = useState([])
  const [chat, setChat] = useState([])
  const [text, setText] = useState(null)
  const [t_id, setTid] = useState(null)

  const getChatbyThreadId = async (threadId) => {
    try {
      setTid(threadId)
      const API = import.meta.env.VITE_API_BASE_URL;
      const res = await axios.get(`${API}/api/messages`)
      console.log("response", res.data.messages)
      const filtered = res.data.messages.filter((msg) => msg.threadId === threadId)
      setChat(filtered)
    } catch(error) {
      console.log("error", error)
    }
  }

  const getThreads = async () => {
    try{
      const API = import.meta.env.VITE_API_BASE_URL;
      const res = await axios.get(`${API}/api/threads`)
      console.log("DAta", res.data.threads)
      setThreads(res.data.threads)
    } catch(error) {
      console.log("error", error)
    }
    
    
  }

  const chatwithAI = async (text, t_id) => {

    try {
      const API = import.meta.env.VITE_API_BASE_URL;
      const res = await axios.post(`${API}/api/messages/ai_message`,{
        threadId: t_id,
        text: text
      })
      await getChatbyThreadId(t_id)
      setText("")

    } catch(error) {
      console.error("Couln't communicate with AI", error)
    }

  }

  return (
    <>
      <div >
        <button onClick={getThreads}>Chat</button>
      </div>
      <div className="thread">
        <ul>
          {
            threads.map((thread) => (
              <li onClick={() => getChatbyThreadId(thread._id)} key={thread._id || thread.id}>{thread.title}</li>
            ))
          }
        </ul>
      </div>
      <br />
      <div className="chat-window">
        <ul>
          {chat.map((msg) => (
            <div key={msg._id}
            className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
            ><p>{msg.text}</p></div>
          ))}
        </ul>
      </div>
      <div>
        <input 
          className="chat-input"
          type="text"
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type anything" 
        />
        <button onClick={() => {chatwithAI(text, t_id)}}>Send</button>
      </div>
    </>
  )
}