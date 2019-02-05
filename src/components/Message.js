import React from "react";
import PropTypes from "prop-types";

export default function Message(props) {
  return (
    <div>
      <h3>{props.chatObject.real_name}</h3>
      <p>{props.chatObject.message}</p>
    </div>
  );
}

// Message.propTypes = {
//   selectedMessages: PropTypes.array
// };
