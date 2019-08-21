import React from "react";
function MailBox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h1>hello</h1>
      {unreadMessage.length > 0 && (
        <h2>you have {unreadMessage.length} unread messages.</h2>
      )}
    </div>
  );
}

export default MailBox;
