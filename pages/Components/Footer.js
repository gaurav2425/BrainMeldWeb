import React from "react";
import Image from "next/image";
import styles from "../../styles/ComponentStyles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
          <Image
            src={require("../../public/footerlogo.png")}
            className={styles.footerimg}
          ></Image>
          <div>
            <h1>BrainMeld</h1>
            <p>The AI Company</p>
          </div>
        </div>

        <div className={styles.footer_right}>
          <div className={styles.footer_right_container1}>
            <h1>More BrainMeld</h1>
            <ul>
              <li>Blog</li>
              <li>Knowledge Center</li>
              <li>New User Guide</li>
              <li>Creator Guide</li>
              <li>Guidelines</li>
            </ul>
          </div>

          <div className={styles.footer_right_container2}>
            <h1>Get in touch</h1>
            <ul>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Feedback</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
