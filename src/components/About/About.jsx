import React from "react";
import { Link } from "react-router-dom";
import { CheckIcon, ArrowIcon } from "../../icons.jsx";
import "./About.css";

import AboutBg from "../asset/MainImg/bg.png"; // Background Image
import AboutImg from "../asset/Docter/Dr.png";      // Doctor PNG

const POINTS = [
  "Experienced doctors across every department",
  "Modern diagnostic and treatment equipment",
  "24/7 emergency care support",
  "4 branches across Tiruppur",
];

export default function About() {
  return (
    <section
      className="section about"
      id="about"
      style={{
        backgroundImage: `url(${AboutBg})`,
      }}
    >
      <div className="container about-inner">

        {/* Left Side */}
        <div className="about-media">

          <img
            src={AboutImg}
            alt="Doctor at Arasu Medical Centre"
            className="about-doctor"
          />

          <div className="about-exp-card">
            <strong>28+</strong>
            <span>Years Serving Tiruppur</span>
          </div>

        </div>

        {/* Right Side */}
        <div className="about-copy">

          <div className="eyebrow">
            <span className="dot"></span>
            About Arasu Medical Centre
          </div>

          <h2 className="section-title">
            Built on trust, run by
            <span> people who care.</span>
          </h2>

          <p
            className="section-sub"
            style={{ marginBottom: "22px" }}
          >
            For 28+ years, Arasu Medical Centre has grown from a single
            clinic into a trusted healthcare destination serving thousands
            of families across Tiruppur. Our commitment remains the
            same — experienced doctors, modern facilities, advanced
            treatments, and compassionate patient care every day.
          </p>

          <ul className="about-points">
            {POINTS.map((point) => (
              <li key={point}>
                <CheckIcon size={18} />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="btn btn-primary"
          >
            Our Full Story
            <ArrowIcon size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}
