import React from "react";

import "../assets/style/Button.css";
import "../assets/style/Bio.css";

class BioDescription extends React.Component {
  render() {
    return (
      <div className="bio__description">
        <h2>Full Stack Developer</h2>
        <h3>Mingmar Gyalzen Sherpa</h3>
        <div className="bio__description--about">
          <p>
            Hi, my name is Mingmar Gyalzen Sherpa and I am a highly skilled and
            motivated full stack developer with a passion for technology and
            problem-solving. I have extensive experience in designing,
            developing, and deploying web applications, and a strong background
            in computer science.
          </p>
          <br></br>
          <p>
            I approach challenges with a can-do attitude, always seeking
            innovative solutions that deliver the best possible results.
            Throughout my career, I have worked on a wide range of projects,
            from small-scale web applications to complex enterprise solutions.
          </p>
          <br></br>
          <p>
            I am highly proficient in front-end technologies such as HTML, CSS,
            JavaScript, and React, as well as back-end languages like Python,
            Ruby, and Java. I am also experienced in using popular web
            development frameworks like Node.js, Ruby on Rails, and Django. As a
            team player, I enjoy collaborating with other developers, designers,
            and stakeholders to bring ideas to life. I am an effective
            communicator who can explain technical concepts in simple terms and
            enjoy working in a fast-paced and dynamic environment. Overall, my
            passion for technology and commitment to delivering high-quality
            work make me an excellent addition to any development team. I am
            dedicated to continually improving my skills and staying up-to-date
            with the latest trends and best practices in the industry.
          </p>
        </div>
        <button className="btn bio__description-btn btn-green">
          Download CV
        </button>
      </div>
    );
  }
}

export default BioDescription;
