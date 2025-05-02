import React, { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jonhny Sin</span>
            <p>Lorem want to write something about you in the long time ago.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png " alt="" />
          <img src="./info.png " alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint id
              fugiat illum quaerat animi facilis. Amet distinctio adipisci illum
              dignissimos, excepturi ipsam odit, id, consequuntur assumenda
              maxime sit at? Perferendis?
            </p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint id
              fugiat illum quaerat animi facilis. Amet distinctio adipisci illum
              dignissimos, excepturi ipsam odit, id, consequuntur assumenda
              maxime sit at? Perferendis?
            </p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint id
              fugiat illum quaerat animi facilis. Amet distinctio adipisci illum
              dignissimos, excepturi ipsam odit, id, consequuntur assumenda
              maxime sit at? Perferendis?
            </p>
            <span>2 mins ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
