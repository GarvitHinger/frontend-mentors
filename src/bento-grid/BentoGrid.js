// import logo from './logo.svg';
import './styles/style.css';
import stars from "./assets/images/illustration-five-stars.webp";
import usernames from "./assets/images/illustration-multiple-platforms.webp";
import calender from "./assets/images/illustration-consistent-schedule.webp";
import schedule from "./assets/images/illustration-schedule-posts.webp";
import follower from "./assets/images/illustration-grow-followers.webp";
import audience from "./assets/images/illustration-audience-growth.webp";
import create from "./assets/images/illustration-create-post.webp"
import ai from "./assets/images/illustration-ai-content.webp"

import React from "react";


function BentoGrid() {
  return (
    <section className="container">

      <div className="grid1">
        <p className="grid1-text1">Social Media <span className="grid1-text2">10x</span></p>
        <p className="grid1-text3">Faster with AI</p>
        <img className="grid1-image" src={stars} alt="Five stars" />
        <p className="grid1-text4">Over 4,000 5-star reviews</p>
      </div>

      <div className="grid2">
        <img className="grid2-image" src={usernames} alt="usernames" />
        <p className="grid2-text1"> Manage multiple accounts and platforms.</p>
      </div>

      <div className="grid3">
        <p className="grid3-text1">Maintain a consistent posting schedule</p>
        <img className="grid3-image1" src={calender} alt="calender" />
      </div>

      <div className="grid4">
        <p className="grid4-text1">Schedule to social media</p>
        <img className="grid4-image1"src={schedule} alt="schedule" />
        <p className="grid4-text2">Optimize post timings to publish content at the perfect time for your audience</p>
      </div>

      <div className="grid5">
        <img className="grid5-image1"src={follower} alt="follower" />
        <p className="grid5-text1">Grow followers with non-stop content.</p>
      </div>

      <div className="grid6">
        <p className="grid6-text1"> &gt; 56%</p>
        <p className="grid6-text2">faster audience growth</p>
        <img className="grid6-image1" src={audience} alt="audience" />
      </div>

      <div className="left-column">
        <div className="grid7">
          <p className="grid7-text1">Create and schdule content <span className="grid7-text2">quicker.</span></p>
          <img className="grid7-image1" src={create} alt="create" />
        </div>

        <div className="grid8">
          <p className="grid8-text1">Write your content using AI.</p>
          <img className="grid8-image1"src={ai} alt="AI" />
        </div>
      </div>

    </section>
  );
}

export default BentoGrid;
