import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {MyProject} from "./components/MyProject/MyProject";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProject/>
        </div>
    );
}

export default App;
