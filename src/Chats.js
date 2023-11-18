import React from 'react';
import './Chats.css';
import Chat from './Chat';


function Chats(props) {
    return (
        <div className='chats'>
            <Chat
                name="Adam"
                message="Jojo my nibba!"
                profilePic="https://i.imgur.com/dp8GGOg.jpeg"
                timestamp="40 secs ago"
            />
            <Chat
                name="Petyko"
                message="Haleluja te meg elsz?"
                profilePic="https://i.imgur.com/6HhUZTF.jpeg"
                timestamp="69 secs ago"
            />
        </div>
    );
}

export default Chats;