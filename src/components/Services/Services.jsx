import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section id="services">
        <h5>My Professional Voyage</h5>
        <h2>My Experience</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>At Vedic City</h3>
              <h4>
                Stipend <br />
                Intern-Full Stack Devloper &<br />
                Marketing Strategy
              </h4>
              <h5>November 2023 - Present</h5>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Working on Various E-commerce Websites</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Using Next.js,Tailwind CSS and API servers</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Voyaging skills with industry Experts and IITB Students</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>At AZeotropy,IIT Bombay</h3>
              <h4>
                Campus Ambassador <br /> CA
              </h4>
              <h5>November 2023 - Present</h5>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Promoting of various Workshops,Competitions & Events</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Providing guidance and resources to aspiring Students </p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Voyaging Soft Skills & Collaborations with students</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>GeeksForGeeks RCOEM Chapter</h3>
              <h4>
                Technical Team <br /> Member
              </h4>
              <h5> Sep 2023 - Present</h5>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Maintenance of GFG RCOEM Chapter Website</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Conducting Various Events and Workshops</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Voyaging as Web devloper & Content writer</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>At Alentar Electric</h3>
              <h4>
                Intern-Web Designer & <br /> Content Writer
              </h4>
              <h5>June 2023 - Present</h5>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Worked on E-commerce Website (alentarelectric.com)</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Working on E-Service Website</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Voyaging as SEO Analyst</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>WorkToGulf</h3>
              <h4>Technical Content Writer</h4>
              <h5>September 2023 - Present</h5>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Writing Blogs about Gulf Recruitments</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  gaining Expreince about SEO,Search Console and Google ads{" "}
                </p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3></h3>
              <h4>Ganitank</h4>
              <h5>November 2022 - January 2023</h5>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Provide Counselling to 100+ Students </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Content Creator for YT channel</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Youtube Channel management and Marketing</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Services;
