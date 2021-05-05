import React, { useEffect, useRef, useState } from 'react';

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
                let msg: Message = JSON.parse(e.data);
                setMessageHistory([...messageHistory, msg]);
            };
        }
    }, [messageHistory]);

    return (
        <>
            <ul>
                {messageHistory.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.Name}: </strong>
                        <span>{msg.Message}</span>
                        <small> -- {msg.When}</small>
                    </li>
                ))}
            </ul>
            WebSocketを使ったちゃっとあぷり
            <form onSubmit={sendMessage}>
                <textarea
                    name="chat"
                    cols={60}
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input type="submit" value="送信" />
            </form>
        </>
    );
};

export default Chat;
