"use client"



import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import Image from 'next/image';
import { BsTelephone, BsThreeDotsVertical } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FiSend } from 'react-icons/fi';
import { TiMicrophoneOutline } from 'react-icons/ti';
import { VscDeviceCamera } from 'react-icons/vsc';
import community from './community.png';
import ChatBubbleLeft from './ChatBubbleLeft';
import ChatBubbleRight from './ChatBubbleRight';
import Peer from 'simple-peer';

const socket = io('http://localhost:5000'); // Update the server URL

export default function Chats() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const [audioURL, setAudioURL] = useState('');
  const [recordedAudio, setRecordedAudio] = useState(null);

  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [callEstablished, setCallEstablished] = useState(false);
  const [peer, setPeer] = useState(null);


  const senderId = '66546cc9f620502d4ce0331f'; // Sender teacher ID
  const receiverId = '665053d88ad154db13e18bc8';
  useEffect(() => {
    // Fetch initial messages from database
    fetch(`http://localhost:5000/api/chat/messages?sender=${senderId}&receiver=${receiverId}`)
      .then(response => response.json())
      .then(data => setMessages(data));

    socket.on('new-message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('new-message');
    };
  }, []);


  const handleSendMessage = async () => {

    const senderModel = 'TeacherDetail';
    const receiverModel = 'TeacherDetail';

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('time', new Date().toLocaleTimeString());
      formData.append('sender', senderId);
      formData.append('senderModel', senderModel);
      formData.append('receiver', receiverId);
      formData.append('receiverModel', receiverModel);

      try {
        const response = await fetch('http://localhost:5000/api/chat/send', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const newMessage = await response.json();
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        } else {
          console.error('Error sending message with file:', response.statusText);
        }
      } catch (error) {
        console.error('Error sending message with file:', error);
      }
    } else if (recordedAudio) {
      console.log('Recorded audio:', recordedAudio);
      const formData = new FormData();
      formData.append('voice', recordedAudio);
      formData.append('time', new Date().toLocaleTimeString());
      formData.append('sender', senderId);
      formData.append('senderModel', senderModel);
      formData.append('receiver', receiverId);
      formData.append('receiverModel', receiverModel);

      try {
        const response = await fetch('http://localhost:5000/api/chat/upload-voice', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const voiceData = await response.json();

          try {
            const newMessageResponse = await fetch('http://localhost:5000/api/chat/send', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                time: new Date().toLocaleTimeString(),
                sender: senderId,
                senderModel,
                receiver: receiverId,
                receiverModel,
                voiceUrl: voiceData.voiceUrl,
              }),
            });

            if (newMessageResponse.ok) {
              const newMessage = await newMessageResponse.json();
              setMessages((prevMessages) => [...prevMessages, newMessage]);
            } else {
              console.error('Error sending voice message:', newMessageResponse.statusText);
            }
          } catch (innerError) {
            console.error('Error sending voice message:', innerError);
          }
        } else {
          console.error('Error uploading voice message:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading voice message:', error);
      }
    } else if (message) {
      try {
        const newMessageResponse = await fetch('http://localhost:5000/api/chat/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            time: new Date().toLocaleTimeString(),
            sender: senderId,
            senderModel,
            receiver: receiverId,
            receiverModel,
            text: message,
          }),
        });

        socket.emit('sendMessage', newMessageResponse);

        if (newMessageResponse.ok) {
          const newMessage = await newMessageResponse.json();
          setMessages((prevMessages) => [...prevMessages, newMessage]);


        } else {
          console.error('Error sending message :', response.statusText);
        }
      } catch (error) {
        console.error('Error sending message :', error);
      }
    }
  };


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileOptionsToggle = () => {
    setShowFileOptions(!showFileOptions);
  };

  const startRecording = () => {

    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          setAudioURL(URL.createObjectURL(event.data));
          setRecordedAudio(event.data); // Store the recorded audio blob
        };
        mediaRecorderRef.current.start();
      });
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    const senderId = '66546cc9f620502d4ce0331f'; // Example sender ID
    const receiverId = '665053d88ad154db13e18bc8 '; // Example receiver ID
    const senderModel = 'TeacherDetail';
    const receiverModel = 'TeacherDetail';
    stopRecording();
    if (recordedAudio) {
      console.log('Recorded audio:', recordedAudio);
      const formData = new FormData();
      formData.append('voice', recordedAudio);
      formData.append('time', new Date().toLocaleTimeString());
      formData.append('sender', senderId);
      formData.append('senderModel', senderModel);
      formData.append('receiver', receiverId);
      formData.append('receiverModel', receiverModel);

      fetch('http://localhost:5000/api/chat/upload-voice', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Upload voice response:', data);
          const newMessage = {
            voiceUrl: data.voiceUrl,
            time: new Date().toLocaleTimeString(),
            sender: senderId,
            senderModel,
            receiver: receiverId,
            receiverModel,
          };

          fetch('http://localhost:5000/api/chat/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMessage),
          });
        })
        .catch(error => console.error('Error uploading voice message:', error));

    }
  };

  const openCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        video.addEventListener('loadedmetadata', () => {
          document.body.appendChild(video);
        });
      });
  };

  useEffect(() => {
    // Get user media
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        setLocalStream(stream);
      })
      .catch(error => {
        console.error('Error getting user media:', error);
      });
  }, []);

  const handlePhoneIconClick = () => {
    // Create a new peer instance
    const peer = new Peer({
      initiator: true,
      stream: localStream,
    });

    setPeer(peer);

    // Send a call request to the other user
    socket.emit('call', {
      to: receiverId,
      from: senderId,
      signal: peer.signal,
    });
  };

  useEffect(() => {
    // Handle incoming call requests
    socket.on('call', (data) => {
      if (data.to === receiverId) {
        // Create a new peer instance
        const peer = new Peer({
          initiator: false,
          stream: localStream,
        });

        setPeer(peer);

        // Send a response to the caller
        socket.emit('answer', {
          to: data.from,
          from: receiverId,
          signal: peer.signal,
        });
      }
    });

    // Handle call answers
    socket.on('answer', (data) => {
      if (data.to === senderId) {
        // Connect the peer instances
        peer.signal(data.signal);
        setCallEstablished(true);
      }
    });

    // Handle remote stream
    if (peer) {
      peer.on('stream', (stream) => {
        setRemoteStream(stream);
      });
    }

    return () => {
      socket.off('call');
      socket.off('answer');
    };
  }, [peer, localStream]);



  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 pl-10 py-10">
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6">
            <h1 className="text-black text-lg font-medium">Total Students</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-black text-lg font-medium">Filter</h1>
            <select className="h-8 w-28 border border-gray-500 outline-none rounded-lg p-1">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="w-full h-screen flex flex-row">
          {/* left side */}
          <div className="h-auto w-[40%] flex flex-col gap-5">
            <div className="h-10 w-[95%] border border-gray-300 rounded-sm flex flex-row items-center gap-2 px-5 py-5">
              <CiSearch size={20} />
              <h1>Search</h1>
            </div>
            <div className="h-auto py-5 w-[95%] border border-blue-300 flex flex-col gap-5 rounded-xl px-5">
              <h1 className="text-black text-lg font-bold">Group</h1>
              {/* Repeat the following block for each group */}
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Class Community
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
            </div>
            <div className="h-auto py-5 rounded-xl w-[95%] border border-blue-300 flex flex-col gap-5 px-5">
              <h1 className="text-black text-lg font-bold">People</h1>
              {/* Repeat the following block for each person */}
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Jay Kumar
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xs text-green-500">Online Now</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Kran Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Kamlesh Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Jyoti Gupta
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">Nikita</h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 class="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="h-auto w-[60%] flex flex-col gap-5">
            <div className="h-[91px] w-[95%] flex flex-row items-center justify-between">
              <div className="flex flex-row gap-5 items-center justify-center">
                <Image src={community} />
                <h1 className="text-black text-md font-semibold">Jay Kumar</h1>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center">
                <div>
                  <div>
                    <BsTelephone size={30} className="text-gray-400" onClick={handlePhoneIconClick} />
                  </div>
                  {callEstablished && (
                    <div>
                      <video srcObject={localStream} />
                      <video srcObject={remoteStream} />
                    </div>
                  )}
                </div>
                <BsThreeDotsVertical size={35} />
              </div>
            </div>
            <div className="h-auto w-full bg-blue-200 flex flex-col gap-5 py-10 px-5">
              {/* Messages */}

              {messages.map((msg, index) => (
                //console.log('Message:', msg);
                //console.log('Sender ID:', senderId);
                //console.log('Is sender ID equal to msg.sender?', senderId === msg.sender);
                <div key={index} className={`w-full flex items-center justify-${msg.sender === senderId ? 'sender' : 'receiver'}`}>
                  {msg.sender === senderId ? (
                    <ChatBubbleRight text={msg.text} time={msg.time} fileUrl={msg.fileUrl}
                      voiceUrl={msg.voiceUrl} />
                  ) : (
                    <ChatBubbleLeft text={msg.text} time={msg.time} fileUrl={msg.fileUrl}
                      voiceUrl={msg.voiceUrl} />
                  )}
                </div>
              ))}
            </div>
            <div className="h-auto w-[95%] flex flex-row gap-2">
              <div className="flex flex-row justify-end items-center gap-3">


              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-[95%] border border-gray-300 rounded-full px-5">
                <input
                  type="file"
                  id="file-input"
                  accept="image/*, video/*"
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                />
                <label htmlFor="file-input" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 21h-5a4.5 4.5 0 01-4.5-4.5v-9A4.5 4.5 0 019.5 3h5a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5z"></path>
                    <path d="M9 10.5L12 13.5 15 10.5"></path>
                  </svg>
                </label>
                <input
                  type="text"
                  className="h-12 w-full border-none outline-none rounded-full p-2"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <VscDeviceCamera size={30} className="text-gray-400 cursor-pointer" onClick={openCamera} />
                <div className="rounded-full bg-white h-14 border border-gray-300 px-14 relative">
                  <div className="absolute right-10 top-3">
                    <button
                      onMouseDown={startRecording}
                      onMouseUp={stopRecording}
                      onMouseLeave={handleMouseLeave}
                      className="bg-gray-200 p-2 rounded-full"
                    >
                      <TiMicrophoneOutline size={20} />
                    </button>

                  </div>
                </div>
                <FiSend size={30} className="text-blue-500 cursor-pointer" onClick={handleSendMessage} />
              </div>
              {audioURL && (
                <audio controls>
                  <source src={audioURL} type="audio/webm" />
                </audio>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}


{/*import Image from "next/image";
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { VscDeviceCamera } from "react-icons/vsc";
import ChatBubbleLeft from "./ChatBubbleLeft";
import ChatBubbleRight from "./ChatBubbleRight";
import community from "./community.png";

export default function chats() {
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 pl-10 py-10  ">
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6">
            <h1 className="text-black text-lg font-medium">Total Students</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-black text-lg font-medium">Filter</h1>
            <select className="h-8 w-28 border border-gray-500 outline-none rounded-lg p-1 ">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="w-full h-screen flex flex-row">
          {/* left side 
          <div className="h-auto w-[40%]  flex flex-col gap-5">
            <div className="h-10 w-[95%] border border-gray-300 rounded-sm flex flex-row items-center gap-2 px-5 py-5">
              <CiSearch size={20} />
              <h1>Search</h1>
            </div>
            <div className="h-auto py-5 w-[95%] border border-blue-300 flex flex-col gap-5 rounded-xl  px-5">
              <h1 className="text-black text-lg font-bold">Group</h1>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Class Community
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Class Community
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Class Community
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
            </div>
            <div className="h-auto py-5 rounded-xl w-[95%] border border-blue-300 flex flex-col gap-5  px-5">
              <h1 className="text-black text-lg font-bold">People</h1>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Jay Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-green-500">Online Now</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Kran Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Kamlesh Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Jyoti Gupta
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">Nikita</h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
            </div>
          </div>
          {/* right side *
          <div className="h-auto w-[60%]  flex flex-col  gap-5 ">
            <div className="h-[91px] w-[95%] flex flex-row items-center justify-between">
              <div className="flex flex-row gap-5 items-center justify-center">
                <Image src={community} />
                <h1 className="text-black text-md font-semibold">Jay Kumar</h1>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center">
                <BsTelephone size={30} className="text-gray-400" />
                <BsThreeDotsVertical size={35} />
              </div>
            </div>
            <div className="h-auto w-full bg-blue-200 flex flex-col gap-5 py-10 px-5">
              <div className="w-full flex items-center justify-start">
                <ChatBubbleLeft
                  text={"    Hi, How are you ?"}
                  time={"Today, 10.30 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <ChatBubbleRight
                  text={"    Fine. WAU ?"}
                  time={"Today, 10.30 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-start">
                <ChatBubbleLeft
                  text={"  Good. What are you doing ?"}
                  time={"Today, 10.31 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <ChatBubbleRight text={"  Study?"} time={"Today, 10.32 pm"} />
              </div>
              <div className="w-full flex items-center justify-start">
                <ChatBubbleLeft
                  text={"  I already finished my study"}
                  time={"Today, 10.32 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <ChatBubbleRight text={"  Good "} time={"Today, 10.33 pm"} />
              </div>

              <div className="w-full gap-10 flex ">
                <div className="flex items-center justify-center w-full relative">
                  <button className="h-7 w-7 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 absolute left-10 text-2xl font-normal">
                    +
                  </button>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full rounded-full bg-white h-14 border border-gray-300 px-20"
                  />
                  <div className="absolute right-20">
                    <VscDeviceCamera size={30} className="text-gray-400  " />
                  </div>
                  <div className="absolute right-8">
                    <FiSend size={25} className="text-blue-500  " />
                  </div>
                </div>
                <div className="rounded-full bg-white h-14 border border-gray-300 px-14 relative ">
                  <div className="absolute right-10 top-3">
                    <TiMicrophoneOutline
                      size={30}
                      className="text-gray-600  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
  */}
