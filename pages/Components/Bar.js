import React, { useState } from "react";
import styles from "../../styles/ComponentStyles/Bar.module.css";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
function Bar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_sub_container}>
        <div className={styles.bar_heading_container}>
          <h1 style={{ fontSize: 33, fontWeight: 400 }}>
            Find your tribe, and love them hard
          </h1>
          {open == false ? (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
              className={styles.add_iconbutton}
            >
              <AddIcon
                className={styles.add_icon}
                style={{ color: "#FFFFFF" }}
              ></AddIcon>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
              className={styles.remove_iconbutton}
            >
              <RemoveIcon
                className={styles.add_icon}
                style={{ color: "#FFFFFF" }}
              ></RemoveIcon>
            </IconButton>
          )}
        </div>

        {open ? (
          <div>
            <p style={{ marginLeft: "10px" }}>
              A chat application is a computer or mobile software that allows
              users to send and receive text-based messages in real-time. Chat
              applications enable users to have individual or group
              conversations with their contacts, friends, or colleagues through
              the internet.
              <br></br>
              Chat applications are designed to provide a convenient and
              easy-to-use communication platform for users. They often come with
              a variety of features that enhance the user experience, such as
              the ability to send and receive multimedia messages, make voice
              and video calls, share files, and use emojis or stickers to
              express emotions.
              <br></br> <br></br>
              Many chat applications also offer end-to-end encryption to protect
              users' privacy and security, preventing unauthorized access to
              their conversations.
              <br></br> <br></br>
              Chat applications have become increasingly popular in recent
              years, especially with the rise of mobile devices and social
              media. They are commonly used for personal communication, social
              networking, business collaboration, and customer support.
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* <div>Plus</div> */}
    </div>
  );
}

export default Bar;
