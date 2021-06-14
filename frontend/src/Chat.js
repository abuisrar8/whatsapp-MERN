import React from 'react'
import './Chat.css'
import {Avatar} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import {SearchOutlined , AttachFile, InsertEmoticon  } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
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

                <p className="chat__message">  
                    <span className="chat__name">Israr
                    <span className="chat__timestamp">
                        {new Date().toLocaleString()}
                    </span></span>
                    This is messsage                
                    
                    </p>

                    <p className="chat__message chat__reciever">  
                    <span className="chat__name">Israr
                    <span className="chat__timestamp">
                        {new Date().toLocaleString()}
                    </span></span>
                    This is messsage                
                    
                    </p>

                    

                    
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                    placeholder="Type a message"
                    type="text" />
                    <button 
                    
                    type="submit"></button>
                </form>
                <MicIcon/>
            </div>

            



        </div>
    )
}

export default Chat
