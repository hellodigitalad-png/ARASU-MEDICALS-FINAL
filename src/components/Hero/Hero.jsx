import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowIcon,
  ShieldIcon,
  StarIcon,
} from "../../icons.jsx";

import "./Hero.css";

import HeroBg from "../asset/MainImg/bg.png";
import MainImg from "../asset/MainImg/right.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${HeroBg})`,
      }}
    >
      <div className="container hero-inner">

        {/* Left Side */}
        <div className="hero-copy">

          <div className="eyebrow">
            <span className="dot"></span>
            Arasu Medical Centre, Tiruppur
          </div>

          <h1>
            28+ Years of Trusted
            <br />
            <span>Healthcare in Tiruppur</span>
          </h1>

          <p>
            Providing quality healthcare with experienced doctors, modern
            facilities, advanced treatments, and compassionate patient care.
          </p>

          <div className="hero-actions">
            <Link to="/contact#appointment" className="btn btn-primary">
              Book Appointment
              <ArrowIcon size={18} />
            </Link>

            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>

          <div className="hero-trust">

            <div className="trust-stars">
              {[1, 2, 3, 4, 5].map((item) => (
                <StarIcon key={item} size={16} />
              ))}

              <span>Trusted by 90,000+ patients</span>
            </div>

            <div className="trust-badge">
              <ShieldIcon size={16} />
              Experienced &amp; Compassionate Care
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-media">

          <img
            src={MainImg}
            alt="Arasu Medical Centre doctor"
            className="hero-product"
          />

        </div>

      </div>
    </section>
  );
}
