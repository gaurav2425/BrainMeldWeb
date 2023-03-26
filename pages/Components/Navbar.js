// import React, { useEffect } from "react";
import styles from "../../styles/ComponentStyles/Navbar.module.css";
// import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.layer}></div> */}
      <div className={styles.navbar_sub}>
        <div className={styles.navbar_left}>
          <Image
            src={require("../../public/logo.png")}
            className={styles.logo}
          />
          <h1 className={styles.brainmeld_txt}>BrainMeld</h1>
        </div>
        <div className={styles.navbar_right}>
          <ul>
            <li className={styles.link}>Home</li>
            <li className={styles.link}>About</li>
            <li className={styles.link}>Articles</li>
            <li className={styles.link}>Social</li>
          </ul>
        </div>

        <div className={styles.navbar_premium_container}>
          <button>Get Premium</button>
        </div>
      </div>

      {/* <div className={styles.navbar_right_icon_container}>
        <MenuIcon className={styles.navbar_menu_icon}></MenuIcon>
      </div> */}
    </div>
  );
}

export default Navbar;
