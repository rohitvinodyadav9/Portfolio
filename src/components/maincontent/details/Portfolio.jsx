import React from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="main-content">
      <Navbar />
      <article class="portfolio active" data-page="portfolio">
        <header>
          <h2 class="h2 article-title">Projects</h2>
        </header>
        <section class="projects">
          <ul class="project-list">
        
            <li
              class="project-item  active"
              data-filter-item
            >
              <Link to="https://bgimagechanger.netlify.app/">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./project-1.png" alt="Background Switcher" loading="lazy" />
                </figure>

                <h3 class="project-title">Background Switcher</h3>

                <p class="project-category">React</p>
              </Link>
            </li>

            <li
              class="project-item  active"
              data-filter-item
            >
              <Link to="https://newcolorpicker.netlify.app/">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="./project-2.png"
                    alt="Color Picker"
                    loading="lazy"
                  />
                </figure>

                <h3 class="project-title">Color Picker</h3>

                <p class="project-category">Website</p>
              </Link>
            </li>           

          </ul>
        </section>
      </article>
    </div>
  );
}

export default Portfolio;
