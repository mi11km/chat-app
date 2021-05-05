import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './Home.css';

const Home = () => {
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

export default Home;
