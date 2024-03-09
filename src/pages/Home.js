import React from "react";
import Navbar from "./Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
    <div className="home">
      <Navbar />
      <div className="items">
        <div className="titles">
          <h1 className="title">I'm Bezawit Eshetu</h1>
          <h1 className="title">
            Frontend Developer | UI/UX Designer | Data Encoder
          </h1>
          <button className="btn">Get in Touch</button>
        </div>
        <div className="container">
          <h1>👋 Hey there!</h1>
          <p style={{ fontSize: "20px" }}>
            I recently graduated from Debre Berhan University in Electrical 
            and Computer Engineering. I am a dedicated Frontend Developer with
            expertise in JavaScript, React, Nodejs and Database Administration.
            My journey in technology is fueled by passion for creating
            good-looking user interfaces with great functionality and
            aesthetics. Besides coding, I make cool designs using Figma and
            Canva.
          </p>
        </div>
      </div>
      </div>
      <div className="section2">
        <p className="topic">MY JOURNEY</p>
        <div className="times">
          <div className="box">
            <h1>Academic</h1>
            <p className="detail">
            <strong>Debre Berhan University:</strong><br />
              I actively participated on school projects. we worked on a project
              called ItemReunite, facilitating the time a person finds his lost item 
               by allowing users to post and search for detailed
              descriptions of their belongings, replacing traditional notice
              board methods.
            </p>
          </div>
          <div className="box" id="box2">
            <h1> Internship</h1>
            <p className="detail">
            <strong>Kifiya Financial Technology - Internship: </strong> <br />
              The project I was involved in is named KHUB which is a website
              that accept interns with broad functionality in MERN Stack
              technology. It helped me expand my knowledge and collaborating
              with teams when necessary. Plus it helped me adopt working at
              fast-paced environments to meet project goals and deliver
              exceptional results.
            </p>
          </div>
          <div className="box" id="box3">
            <h1>Full-Time Job</h1>
            <p className="detail">
            <strong>Bazra Motors - Frontend Developer: </strong><br />
              I am currently working on developing an Admin dashboard in Reactjs.
              responsible for developing web applications for Bazra Motors
              Company. Collaborating with backend developers to ensure seamless
              integration of frontend and backend functionalities. Participating
              in team discussions and quickly learning new technologies and
              adapting to evolving industry standards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
