import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js'

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat Bot Playground</h1>
      </header>
      <main className="App-main">
        <ChatLog chats={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
