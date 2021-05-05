import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="text-center">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>チャットアプリ</p>
                <Link className="App-link" to="/chat">
                    チャットを始める！
                </Link>
            </header>
        </div>
    );
};

export default App;
