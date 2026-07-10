import React from "react";
import { Link } from "react-router-dom";
import { StoreIcon, PinIcon, ArrowIcon } from "../../icons.jsx";
import "./Branches.css";

import mapImg from "../asset/map/tirupur map.jpg";

// Background Image
import BranchBg from "../asset/MainImg/right-bg.png";

const BRANCHES = [
  {
    city: "Main Branch",
    address: "Arasu Medical Centre, Tiruppur, Tamil Nadu",
  },
  {
    city: "Avinashi Road Branch",
    address: "Avinashi Road, Tiruppur, Tamil Nadu",
  },
  {
    city: "Palladam Road Branch",
    address: "Palladam Road, Tiruppur, Tamil Nadu",
  },
  {
    city: "Kongu Main Road Branch",
    address: "Kongu Main Road, Tiruppur, Tamil Nadu",
  },
];

export default function Branches({ full = false }) {
  const list = full ? BRANCHES : BRANCHES.slice(0, 4);

  return (
    <section
      className="section branches"
      id="branches"
      style={{
        backgroundImage: `url(${BranchBg})`,
      }}
    >
      <div className="container">
        {!full && (
          <div className="section-head">
            <div
              className="eyebrow"
              style={{ margin: "0 auto 16px" }}
            >
              <span className="dot"></span>
              Our Branches
            </div>

            <h2 className="section-title">
              {BRANCHES.length} branches,
              <span> one standard of care.</span>
            </h2>

            <p className="section-sub">
              Walk in for a consultation, or book an appointment online
              at your nearest branch.
            </p>
          </div>
        )}

        <div className="branches-layout">

          <div className="branches-map">

            <img
              src={mapImg}
              alt="Arasu Medical Branch Map"
            />

            <div className="map-pin-count">
              <StoreIcon size={16} />
              {BRANCHES.length} Branches
            </div>

          </div>

          <div className="branches-list">

            {list.map((branch) => (

              <div
                className="branch-item"
                key={branch.city}
              >

                <div className="branch-icon">
                  <PinIcon size={16} />
                </div>

                <div>

                  <h4>{branch.city}</h4>

                  <p>{branch.address}</p>

                </div>

              </div>

            ))}

            {!full && (

              <Link
                to="/contact"
                className="btn btn-primary btn-block"
              >
                View All Branches
                <ArrowIcon size={16} />
              </Link>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}