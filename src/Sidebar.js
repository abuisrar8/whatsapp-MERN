import { Avatar, IconButton} from '@material-ui/core'
import { MoreVertIcon} from '@material-ui/icons/MoreVert'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">

            
            <div className ="sidebar__headder">
                <div className="">
                    <Avatar src="" />

                </div>
                <div className ="sidebar__headderRight">
                    <IconButton><DonutLargeIcon/></IconButton>
                    <IconButton><ChatIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>

                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
