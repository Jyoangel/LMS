// frontend/components/Chat.js

import axios from 'axios';


const fetchAllUsers = async () => {
    try {
        const token = await getAuthToken();
        const response = await axios.get(`https://lms1.kinde.com/api/v1/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
        });
        const users = response.data;
        // Filter out the logged-in user
        const otherUsers = users.filter((user) => user.id !== "kp_9724d553e0414e7da6da254270ccffab");
        return otherUsers;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getAuthToken = async () => {
    try {
        const response = await axios.post(`https://lms1.kinde.com/oauth2/token`, {
            grant_type: 'client_credentials',
            client_id: "b36fe335d3e642a3909b8d7929d646eb",
            client_secret: "cBUIwPA9wJPGHvT8xYub3SPB4mmIVmOFrBULVQTo7j8wr1Aqy",
            audience: `https://lms1.kinde.com/api`,
        });
        console.log("Respone ", response)
        const token = response.data.access_token;
        return token;
    } catch (error) {
        console.error('Error getting auth token:', error);
        throw error;
    }
};



console.log('KINDE_ISSUER_URL1234:', process.env.KINDE_ISSUER_URL);
console.log('KINDE_CLIENT_ID123:', process.env.KINDE_CLIENT_ID);
console.log('KINDE_CLIENT_SECRET123:', process.env.KINDE_CLIENT_SECRET);

export default fetchAllUsers;
{/*
"use client"
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000');

const Chat = ({ user }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await axios.get('http://localhost:5000/api/chat/messages');
            setMessages(res.data);
        };
        fetchMessages();
    }, []);

    useEffect(() => {
        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, []);

    const sendMessage = () => {
        const messageData = {
            time: new Date().toISOString(),
            sender: user,
            senderModel: 'User',
            receiver: user === 'User1' ? 'User2' : 'User1',
            receiverModel: 'User',
            text: message,
        };

        socket.emit('sendMessage', messageData);
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;


{/*import React from 'react'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function user() {
    const { getUserOrganizations } = getKindeServerSession();
    const userOrgs = await getUserOrganizations();

    console.log(userOrgs);

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    console.log(user);
    return (
        <div>
            <div className="h-auto py-5 rounded-xl w-[95%] border border-blue-300 flex flex-col gap-5 px-5">
                <h1 className="text-black text-lg font-bold">All Students</h1>

                {Array.isArray(user) && user.map((user) => (
                    <div key={user.id} className="h-[62px] w-[90%] flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <Image src={user.picture} alt={`${user.given_name} ${user.family_name}`} />
                            <h1 className="text-black text-md font-semibold">{user.given_name} {user.family_name}</h1>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xs text-gray-500">Last Seen</h1>
                            <h1 className="text-xs text-gray-500">10.00AM</h1>
                        </div>
                        {/* <div onClick={() => handleUserClick(user)}>Click to start chat</div> *
                    </div>
                ))}
            </div></div>
    )
}
*/}