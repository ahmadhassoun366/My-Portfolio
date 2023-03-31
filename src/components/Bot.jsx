import React, { useState } from "react";
import { TbMessageCircle } from 'react-icons/tb';
import {FaRobot} from 'react-icons/fa';
import {MdOutlineCancel} from 'react-icons/md';
import { functions } from '../firebase';


const Bot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [conversation, setConversation] = useState([
    { message: "Hi there! How can I help you?", sender: "bot" }
  ]);

  const handleBotClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
    const newMessage = { message: inputText, sender: "user" };
    setInputText("");
    setConversation([...conversation, newMessage]);

    // Call chatbot function on Firebase Cloud Functions and update conversation state with response
    const chatbot = functions.httpsCallable('chatbot');
    try {
      const response = await chatbot({ message: inputText });
      const botMessage = { message: response.data.message, sender: "bot" };
      setConversation([...conversation, botMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer mb-8">
      {!isChatOpen && (
        <div className="text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
          onClick={handleBotClick}
        >
          <TbMessageCircle />
        </div>
      )}
      {isChatOpen && (
        <div className="bg-white w-80 h-96 rounded-lg shadow-xl">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-lg">
            <div className="text-gray-700 font-bold text-lg">Chatbot</div>
            <div className="cursor-pointer text-gray-900 " onClick={handleBotClick}><MdOutlineCancel size={30}/></div>
          </div>
          <div className="overflow-y-auto h-80 p-4">
            {conversation.map((msg, idx) => (
              <div key={idx} className={`text-lg my-2 ${msg.sender === "bot" ? "text-blue-500" : "text-gray-700"} ${msg.sender === "bot" ? "flex items-end" : "flex items-start"}`}>
                {msg.sender === "bot" && <FaRobot className="text-blue-500 mx-2 my-7" size={30}/>}
                <div className="rounded-lg px-4 py-2" style={{ backgroundColor: msg.sender === "bot" ? "#EDF2F7" : "#F7FAFC" }}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleInputSubmit} className="my-2 flex items-center justify-between p-4 border-t border-gray-300">
            <input type="text" className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Type your message..."
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              aria-label="Chatbot input field"
            />
            <button type="submit" className="ml-2 text-white bg-cyan-600 py-2 px-4 rounded-lg">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Bot;