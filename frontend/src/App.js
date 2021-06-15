
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [message, setmessage] = useState([])

  useEffect( ()=>{

    axios.get('/messages/sync').then( (response) =>{
      setmessage(response.data)
    })
  },[])


  useEffect(() => {
    const pusher = new Pusher('0238db2e963ca3fd0ce1', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      
      setmessage([...message, newMessages])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
    
  }, [message])


  console.log(message)

  return (
    <div className="app">
      <div className="app__body">



        <Sidebar/>
        <Chat messages={message}/>

      </div>
     
   

    </div>
  );
}

export default App;
