
import React from 'react'
import { Avatar, IconButton} from '@material-ui/core'
import  MoreVertIcon from '@material-ui/icons/MoreVert'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'

import './Sidebar.css'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">

            
            <div className ="sidebar__header">
                
                <Avatar src= "https://avatars.githubusercontent.com/u/51960220?v=4" />

                
                <div className ="sidebar__headerRight">
                    <IconButton ><DonutLargeIcon clasName="icon"/></IconButton>
                    <IconButton><ChatIcon clasName="icon"/></IconButton>
                    <IconButton><MoreVertIcon clasName="icon"/></IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className = "sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
            
        </div>
    )
}

export default Sidebar
