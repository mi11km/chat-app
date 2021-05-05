import React, { useEffect, useRef, useState } from 'react';

import './Chat.css';

interface Message {
    Name: string;
    Message: string;
    When: Date;
}

const Chat = () => {
    const socket = useRef<WebSocket>(new WebSocket('ws://localhost:8080/room')); // todo host動的に変えれるようにする
    const [message, setMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState<Message[]>([]);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!socket.current) {
            alert('エラー：Websocket接続なし');
        } else if (!message) {
            alert('メッセージを書いてください');
        } else {
            socket.current.send(JSON.stringify({ Message: message }));
            setMessage('');
        }
    };

    useEffect(() => {
        if (!window['WebSocket']) {
            alert('エラー：Websocketに対応していないブラウザです');
        } else {
            socket.current.onmessage = (e) => {
                const msg: Message = JSON.parse(e.data);
                setMessageHistory([...messageHistory, msg]);
                const chatScreen = document.getElementById('chat-screen');
                if (chatScreen !== null) {
                    const bottom = chatScreen.scrollHeight - chatScreen.clientHeight;
                    chatScreen.scroll(0, bottom);
                }
            };
        }
    }, [messageHistory]);

    return (
        <div className="container m-auto h-screen w-full bg-gray-300">
            <h1 className="text-center py-6 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
                WebSocketを使ったちゃっとあぷり
            </h1>

            <ul className="h-3/4 overflow-scroll bg-gray-100 rounded-md" id="chat-screen">
                {messageHistory.map((msg, index) => (
                    <li key={index} className="my-1 flex justify-between">
                        <div className="flex">
                            <div>{msg.Name}:</div>
                            <div className="arrow_box ml-12">{msg.Message}</div>
                        </div>
                        <div className="">
                            <small> -- {msg.When}</small>
                        </div>
                    </li>
                ))}
            </ul>

            <form
                onSubmit={sendMessage}
                className="absolute bottom-0 my-4 lg:left-1/4 lg:right-1/4">
                <textarea
                    name="chat"
                    cols={100}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 w-full px-3 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="text-center">
                    <input
                        type="submit"
                        value="送信"
                        className="text-white bg-blue-500 w-4/5 h-12  mt-3 rounded-md hover:bg-blue-300 cursor-pointer"
                    />
                </div>
            </form>
        </div>
    );
};

export default Chat;
