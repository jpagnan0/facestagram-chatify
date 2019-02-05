import React from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
export default function Chat(props) {

  const handleClickEvent = (e) => {
    props.handleClick(e)
  }

const chatList = chats => {
  let groupByUser = Object.keys(_.groupBy(chats, "real_name"));
  // console.log(groupByUser)
  return groupByUser.map((name,i) => {
      return <li onClick={(e) => handleClickEvent(e)} key={i}><a>{`${name}`}</a></li>
  })
};


  return (
    <aside className="menu">
      <ul className="menu-list">
        {chatList(props.chatList)}
      </ul>
    </aside>
  );
}

Chat.propTypes = {
  chatList: PropTypes.array
};
