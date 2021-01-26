import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Chat, addResponseMessage } from 'react-chat-popup';
import RouterURL from './components/RouterURL/RouterURL';
import admin from './admin.jpg';
import Footer from './components/Footer/Footer';
import Headerfn from './components/Header/Headerfn';
class App extends Component {
  componentDidMount() {
    addResponseMessage("Chào mừng quý khách đến với CDN WATCH!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          
          title="CDN Watch"
          subtitle="And my cool subtitle"
        />
          <div className="container-fiuld">
           <Headerfn/>
          </div>
          <RouterURL />
        </div>
        <Footer/>
      </Router>
    );
  }
}



export default App;