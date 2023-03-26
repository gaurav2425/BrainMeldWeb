// import React from "react";
import Nav from "./Components/Nav";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bar from "./Components/Bar";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.navbar}>
        <Navbar></Navbar>
      </div>

      <div className={styles.responsive_navbar}>
        <Nav></Nav>
      </div>

      <div className={styles.bodies}>
        <div className={styles.body1}>
          <div className={styles.square1}>
            <div className={styles.square1_left}>
              <h1 className={styles.tagline1}>
                DEVELOPED BY HUMANS POWERED BY AI
              </h1>
            </div>
            <div className={styles.circle1}>
              {/* <h1>DEVELOPED BY HUMANS POWERED BY AI</h1> */}
              <Image
                src={require("../public/arrow1.png")}
                className={styles.arrow}
              />
            </div>

            <div className={styles.square1_right}>
              <h1>2023</h1>
            </div>
          </div>

          <div className={styles.square2}>
            <div className={styles.square2_left}>
              <h1 className={styles.tagline2}>
                One of the key benefits of AI technology is its ability
              </h1>
            </div>
            <div className={styles.circle2}>
              {/* <h1>DEVELOPED BY HUMANS POWERED BY AI</h1> */}
              <Image
                src={require("../public/star.png")}
                className={styles.star}
              />
            </div>

            <div className={styles.square2_right}>
              <h1>THE AI COMPANY</h1>
            </div>
          </div>

          <div className={styles.square3}>
            <div className={styles.square3_sub}>
              <h1 className={styles.square3_tagline}>
                We Create Products Based on Machine Learning And AI
              </h1>
            </div>
          </div>
        </div>

        <div className={styles.body2}>
          <div className={styles.body2_txt_container}>
            <div className={styles.body2_txt_container_txtline1}>
              <h1>ARE THE AI</h1>
              <h2>
                WHAT IT WILL Mean to Be Moved By An AI Mindless Creativity.
              </h2>
            </div>
            <div className={styles.body2_txt_container_txtline2}>
              <h1>RIPPING</h1>
              <Image
                src={require("../public/ring2.png")}
                className={styles.ring}
              />
              <h1>OF THE</h1>
            </div>
            {/* <h1>RIPPING OF THE</h1> */}
            <h1>HUMAN BRAIN</h1>
          </div>

          <div className={styles.row_container}>
            <div className={styles.row_container_left}>
              <h1>
                Designed to respond to text-based queries and generate natural
                language responses
              </h1>
              <p>
                ChatGPT is able to understand the context of a conversation,
                including the previous messages or prompts, and use that
                information to generate more relevant and coherent responses.The
                router supports nested files. If you create a nested folder
                structure, files will automatically be routed in the same way
                still.The router supports nested files. If you create a nested
                folder structure, files will automatically be routed in the same
                way still.The router supports nested files. If you create a
                nested folder structure, files will automatically be routed in
                the same way still.The router supports nested files. If you
                create a nested folder structure, files will automatically be
                routed in the same way still
              </p>
            </div>

            <div className={styles.row_container_right}>
              <Image
                src={require("../public/brain.png")}
                className={styles.brainimg}
              />
            </div>
          </div>

          <div className={styles.body2_txt_container}>
            <div className={styles.what_do_you_think}>
              <h1>
                WE KNOW <br></br>
                WHAT YOU THINK
              </h1>
            </div>
            <div className={styles.bar_container}>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
            </div>
          </div>
          <div className={styles.footer_container}>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
