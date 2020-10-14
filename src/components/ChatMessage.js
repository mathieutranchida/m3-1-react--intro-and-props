import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props);
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const SentMessage = (props) => {
  return (
    <div className="to-the-right text-container">
      <div className="sent-message">{props.message.body}</div>
    </div>
  );
};

const ReceivedMessage = (props) => {
  return (
    <div className="received-message text-container">
      <img className="user-avatar" src={props.message.user.avatar} />
      <div className="text">
        <div className="username">{props.message.user.username}</div>
        <div className="message">{props.message.body}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
