import React, { Component } from "react";
import ChatContainer from "./components/ChatContainer";
import MessageContainer from "./components/MessageContainer";
const URL = "http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: "John",
      chats: [],
      selectedChats: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            chats: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            error
          });
        },
        () => console.log(this.state.chats, this.state.messages)
      );
  }

  handleClick = (event) => {
    console.log(event.target.innerText)
    this.updateSelectedChat(event.target.innerText)
    console.log(this.state)
  }

  updateSelectedChat = chatName => {
    // this.setState({
    //   selectedChats: this.state.chats.filter(chat => chat.real_name === chatName)
    // })
    console.log("updateSelectedChat:", this.state.chats);
    let filteredChats = [];
    filteredChats = this.state.chats.filter(
      chat => chat.real_name === chatName
    );
    console.log("filteredChats: ", filteredChats);

    this.setState({
      selectedChats: [...this.state.selectedChats, filteredChats]
    });
  };

  render() {


    return (
      <div className="container">
        <div className="row">
          <ChatContainer className="column is-4" handleClick={this.handleClick} chats={this.state.chats} updateSelectedChat={this.updateSelectedChat} />
          <MessageContainer className="column is-8" selectedChats={this.state.selectedChats.flat()} />
        </div>
      </div>
    );
  }
}
