import React from "react";
import { Link } from "react-router-dom";
import Statistics from "../components/Statistics/Statistics.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import {
  CheckIcon,
  ArrowIcon,
  ShieldIcon,
  HeartIcon,
  MedalIcon,
  UsersIcon,
} from "../icons.jsx";
import "./AboutPage.css";
import Bg from "../components/asset/MainImg/bg.png";
import StoryImg from "../components/asset/MainImg/photo-1576091160399-112ba8d25d1d.jpeg";

const VALUES = [
  {
    icon: ShieldIcon,
    title: "Integrity First",
    text: "We never compromise on the quality of care — every treatment plan is built on honest diagnosis and clear communication.",
  },
  {
    icon: HeartIcon,
    title: "Compassionate Care",
    text: "Every patient gets the same attention, whether it's a routine checkup or an emergency at 2 AM.",
  },
  {
    icon: MedalIcon,
    title: "Consistent Quality",
    text: "The same clinical standard applies across all 4 branches — no exceptions, no shortcuts.",
  },
  {
    icon: UsersIcon,
    title: "Community Rooted",
    text: "We're a Tiruppur institution, employing local doctors and staff and reinvesting in the community we serve.",
  },
];

const TIMELINE = [
  {
    year: "1999",
    title: "The First Clinic",
    text: "Arasu Medical Centre opens its first clinic in Tiruppur with a single doctor and a promise of honest, quality healthcare.",
  },
  {
    year: "2005",
    title: "Emergency Care Launched",
    text: "Introduces round-the-clock emergency care to serve the community when it matters most.",
  },
  {
    year: "2012",
    title: "Regional Expansion",
    text: "Expands to multiple branches across Tiruppur to support growing community healthcare demands.",
  },
  {
    year: "2020",
    title: "New Equipment Upgrade",
    text: "Adds modern diagnostic equipment across branches to serve patients faster and more accurately.",
  },
  {
    year: "2026",
    title: "28 Years Strong",
    text: "Today, Arasu Medical Centre proudly serves 90,000+ patients across 4 branches in Tiruppur.",
  },
];

const STORY_POINTS = [
  "Every branch staffed with experienced, licensed doctors",
  "Modern diagnostic and treatment equipment at every location",
  "90,000+ patients treated across Tiruppur and counting",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* SECTION 1: Hero */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="about-hero-overlay" />
        <div className="container about-hero-inner fade-up">
          <div className="eyebrow eyebrow-light">
            <span className="dot" /> About Arasu Medical Centre
          </div>
          <h1 className="about-hero-title">
            28+ Years of <span>Trusted Healthcare</span>
          </h1>
          <p className="about-hero-sub">
            From a single clinic in 1999 to 4 branches serving Tiruppur
            today — our promise has never changed: quality healthcare,
            honestly delivered.
          </p>
          <div className="breadcrumb breadcrumb-light">
            Home / <span>About Us</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <section
        className="section about-story"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="container about-story-grid">
          <div className="about-story-media fade-up">
            <div
              className="about-story-panel"
              style={{ backgroundImage: `url(${StoryImg})` }}
            />
            <div className="story-badge">
              <span className="story-badge-num">28+</span>
              <span className="story-badge-label">Years of Trust</span>
            </div>
          </div>
          <div className="about-story-copy fade-up delay-1">
            <div className="eyebrow">
              <span className="dot" /> Our Story
            </div>
            <h2 className="section-title">
              A community hospital that <span>grew with Tiruppur.</span>
            </h2>
            <p className="section-sub">
              Arasu Medical Centre began in 1999 as a single clinic,
              founded on a simple belief: that healthcare should feel
              personal, not procedural.
            </p>
            <p className="section-sub">
              Over 28 years later, that belief hasn't changed — even as
              we've grown to 4 branches, round-the-clock emergency care,
              and a dedicated team of experienced doctors across Tiruppur.
            </p>
            <ul className="about-story-points">
              {STORY_POINTS.map((point) => (
                <li key={point}>
                  <CheckIcon size={16} />
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Visit a Branch Near You <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: Statistics */}
      <Statistics />

      {/* SECTION 4: Values */}
      <section
        className="section values"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="container">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
              <span className="dot" /> What We Stand For
            </div>
            <h2 className="section-title">
              Our <span>core values.</span>
            </h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div
                className={`value-card fade-up delay-${(i % 4) + 1}`}
                key={v.title}
              >
                <div className="value-icon">
                  <v.icon size={24} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Timeline */}
      <section
        className="section-tight timeline-section"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="container">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
              <span className="dot" /> Our Journey
            </div>
            <h2 className="section-title">
              28 years, <span>one milestone at a time.</span>
            </h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div
                className={`timeline-item fade-up delay-${(i % 4) + 1}`}
                key={t.year}
              >
                <div className="timeline-dot">
                  <span className="timeline-dot-pulse" />
                </div>
                <div className="timeline-card">
                  <div className="timeline-year">{t.year}</div>
                  <h4 className="timeline-title">{t.title}</h4>
                  <p className="timeline-text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials */}
      <Testimonials />
    </div>
  );
}
