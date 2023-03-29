// import React from "react";
import Nav from "./Components/Nav";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bar from "./Components/Bar";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useState } from "react";
function Home() {
  const data = [
    {
      question: "What is BrainMeld? and how does it work?",
      ans: "ChatGPT is a large-scale conversational AI model developed by OpenAI that can generate human-like responses to a wide range of input prompts. It is based on the GPT (Generative Pre-trained Transformer) architecture, which is a type of deep neural network that uses self-supervised learning to process and generate natural language.At its core, ChatGPT works by using a combination of deep learning algorithms and natural language processing techniques to analyze the input text, generate a response, and refine it over time based on feedback. When a user inputs a prompt or question, ChatGPT uses its pre-existing knowledge of language and context, along with the specific input, to generate a response that is contextually relevant and coherent. To train ChatGPT, vast amounts of textual data from a variety of sources were used to pre-train the model. This pre-training enabled ChatGPT to learn and understand the nuances of language, grammar, and context. Additionally, ChatGPT can also be fine-tuned using specific datasets or input prompts to further improve its performance on a specific task or domain. Overall, ChatGPT's ability to generate human-like responses in real-time has made it a valuable tool for a wide range of applications, such as chatbots, customer service, personal assistants, education, and more.Regenerate response",
    },
    {
      question: "Purpose of Developing BrainMeld",
      ans: "The purpose of developing ChatGPT, as with other GPT (Generative Pre-trained Transformer) models, is to create a language model capable of understanding and generating human-like language in response to various inputs, such as text prompts or spoken words. The goal is to make conversational agents or chatbots that can interact with humans in a more natural and effective way, enabling them to be used for a variety of applications such as customer service, personal assistants, education, and entertainment. ChatGPT, in particular, was designed to be a state-of-the-art conversational AI system capable of generating coherent and contextually appropriate responses to a wide range of questions and topics. It was trained on a massive amount of textual data and can generate human-like responses that are often difficult to distinguish from those of a human.The development of ChatGPT and other GPT models has advanced the field of natural language processing and brought us closer to achieving more effective and efficient human-machine interactions",
    },
    {
      question: "How does ChatGPT generate responses to input prompts",
      ans: "ChatGPT generates responses to input prompts using a technique called language modeling. Language modeling involves predicting the likelihood of a sequence of words given the context in which they appear. In other words, given an input prompt or sentence, ChatGPT tries to predict the most likely words that would follow in a coherent and contextually appropriate way.To do this, ChatGPT uses a deep neural network architecture known as a Transformer. The Transformer model is composed of multiple layers of attention mechanisms and feedforward neural networks, which allow it to process the input text and generate responses with a high degree of accuracy and fluency. When an input prompt is given to ChatGPT, it first tokenizes the text by breaking it down into individual words or subwords. Then, it feeds the tokenized input into the Transformer model, which uses its pre-trained knowledge of language and context to generate a sequence of output tokens that form the response to the input prompt.The output tokens are then decoded back into human-readable text, which is returned as the response to the input prompt. The process is repeated for each subsequent prompt or question, and the model can be fine-tuned over time based on feedback to improve its performance.",
    },
    {
      question: "How does ChatGPT handle complex or technical topics?",
      ans: "ChatGPT can handle complex or technical topics to some extent, but it may struggle with certain types of content that require specialized knowledge or domain-specific expertise. One of the key strengths of ChatGPT is its ability to generate responses based on the context of the input prompt. However, this also means that the quality of the response will depend on the quality of the input prompt and the context it provides. For complex or technical topics, it may be difficult for ChatGPT to generate accurate and relevant responses without access to domain-specific knowledge or expertise. To overcome this limitation, it may be possible to fine-tune ChatGPT on specific datasets or input prompts related to the technical or complex topic in question.",
    },
  ];

  const [mydata, setMydata] = useState(data);
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
              <h1 className={styles.tagline1}>DEVELOPED BY HUMANS</h1>
              <h1 className={styles.tagline1}>POWERED BY AI</h1>
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
              <h1 className={styles.tagline2}>One of the key benefits of AI</h1>
              <h1 className={styles.tagline2}>technology is its ability</h1>
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

          {/* <div className={styles.square3}>
            <div className={styles.square3_sub}>
              <h1 className={styles.square3_tagline}>
                Our work to create safe and beneficial AI requires a deep
                understanding of the potential risks and benefits, as well as
                careful consideration of the impact.
              </h1>
            </div>
          </div> */}
        </div>

        <div className={styles.body2}>
          <div className={styles.body2_txt_container}>
            <div className={styles.body2_txt_container_txtline1}>
              <h1>
                <span style={{ color: "#FF8B13" }}>ARE</span> THE AI
              </h1>
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
            <h1 style={{ color: "#FFFFFF" }}>HUMAN BRAIN 🧠</h1>
          </div>

          <div className={styles.row_container}>
            <div className={styles.row_container_left}>
              <h1>
                Safely aligning powerful AI systems is one of the most important
                unsolved problems for our mission.
              </h1>
              <p>
                Techniques like learning from human feedback are helping us get
                closer, and we are actively researching new techniques to help
                us fill the gaps The development of powerful artificial
                intelligence (AI) systems has the potential to revolutionize
                many aspects of our lives, from healthcare to transportation to
                entertainment. However, with this power comes the risk of
                unintended consequences or even catastrophic failures, which is
                why safely aligning these systems is one of the most important
                unsolved problems for the field of AI. One approach to safely
                aligning AI systems is to incorporate human feedback into the
                learning process. This involves designing algorithms that can
                learn from the feedback of human experts, such as programmers or
                domain specialists.
                {/* By doing so, the AI system can adapt to new
                information and situations more quickly and accurately. However,
                relying solely on human feedback has its limitations. For
                example, human experts may not always be available or may not be
                able to provide feedback quickly enough to prevent errors or
                accidents. Additionally, human feedback may be biased or
                incomplete, leading to suboptimal outcomes. To address these
                challenges, researchers are actively exploring new techniques to
                safely align AI systems. These techniques include developing
                algorithms that can learn from a wider range of sources, such as
                simulated environments or real-time data streams. They also
                involve incorporating ethical considerations into the design of
                AI systems, such as fairness and transparency, to ensure that
                the systems are aligned with human values and goals. */}
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
              {mydata.map((data, index) => {
                return (
                  <Bar
                    question={data.question}
                    ans={data.ans}
                    key={index}
                  ></Bar>
                );
              })}
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
