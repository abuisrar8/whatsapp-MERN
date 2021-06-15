import React, { useState } from 'react'
import './Chat.css'
import {Avatar} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import {SearchOutlined , AttachFile, InsertEmoticon  } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MicIcon from '@material-ui/icons/Mic'
import axios from "./axios"



function Chat( {messages}) {

    const [input, setinput] = useState([])

    const sendMessage = async (e)=>{
        e.preventDefault();
        await axios.post('/messages/new',{
            message: input,
            name:"demo",
            timestamp:"justnow",
            received:false,
        })
       setinput("") 
    }



    return (
        <div className="chat" >

           
            <div className="chat__header">
                <Avatar/>

                <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p> last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>  
                </div>

            </div>

            <div className="chat__body">
                {messages.map((message)=>(

                    <p className={`chat__message ${message.received && "chat__receiver"}`}>  
                    <span className="chat__name">{message.name}
                    <span className="chat__timestamp">
                        {message.timestamp} 
                    </span></span>
                    {message.message}               

                    </p>

                    

                ))}
               
                

                    

                    
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                    value={input}
                    onChange ={ (e)=> setinput(e.target.value)}
                    placeholder="Type a message"
                    type="text" />
                    <button 
                    onClick={sendMessage}
                    type="submit"></button>
                </form>
                <MicIcon/>
            </div>

            



        </div>
    )
}

export default Chat
