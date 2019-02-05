import React, { Component } from 'react';
import Message from './Message'

export default class MessageContainer extends Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //
  //   };
  // }
  //
  handleRenderMessages = () => {
    console.log("this.props.selectedChats: ", this.props.selectedChats)
    return this.props.selectedChats.map( (chat, i) => {
      return (
        <Message key={i} chatObject={chat}/>
      )
    })
  }

  render() {
    console.log("in the render: ", this.handleRenderMessages())
    return (
      <div className="column is-4">
        {this.handleRenderMessages()}
      </div>
    );
  }

}
