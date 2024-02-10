import React from "react";
import { MessageInput } from "stream-chat-react";

function CustomInput() {
  return (
    <div className="str-chat__input-flat str-chat__input-flat--send-button-active">
      <div className="str-chat__input-flat-wrapper">
        <div className="str-chat__input-flat--textarea-wrapper">
          <MessageInput noFiles />
        </div>
      </div>
    </div>
  );
}

export default CustomInput;
