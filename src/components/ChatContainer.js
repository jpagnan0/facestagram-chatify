import React, { Component } from "react";
import Chat from './Chat'
// import { Button, SideNavItem, SideNav } from "react-materialize";

export default class ChatContainer extends Component {
  // console.log(this.props.selectedChats(this.props.chats))

  render() {

    return (
      <div className="chat-list">
        <Chat handleClick={this.props.handleClick} updateSelectedChat={this.props.updateSelectedChat} chatList={this.props.chats} />
      </div>
    );
  }
}
