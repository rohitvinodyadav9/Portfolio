import React from 'react';
import Navbar from '../../Navbar';

function Resume() {
  return (
    <div className="main-content">
      <Navbar />
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Master of Computer Applications</h4>
            <span>2021 — 2023</span>
            <p className="timeline-text">
              University of Allahabad
            </p>
            <span>8.7 CGPA</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Bachelor of Computer Applications</h4>
            <span>2018 — 2021</span>
            <p className="timeline-text">
              University of Allabad
            </p>
            <span>7.4 CGPA</span>
          </li>

          {/* <li className="timeline-item">
            <h4 className="h4 timeline-item-title">High school of art and design</h4>
            <span>2002 — 2004</span>
            <p className="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
              magni dolores eos.
            </p>
          </li> */}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Developer Internship</h4>
            <span>Nov 2023 - Dec 2023</span>
            <p className="timeline-text">
            Done an internship at Unified Mentors, contributing to the development and optimization of web solutions, and further honing skills in web technologies and best practices.
            </p>
          </li>

        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React Js</h5>
              <data value="60">60%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '60%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Javascript</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '70%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Tailwind</h5>
              <data value="50">50%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '50%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">HTML&CSS</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
    </div>
  );
}

export default Resume;
