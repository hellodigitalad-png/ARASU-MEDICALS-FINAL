import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons.jsx";

export default function NotFound() {
  return (
    <section
      className="section"
      style={{ textAlign: "center", padding: "120px 20px" }}
    >
      <div className="container">
        <h1 className="section-title" style={{ marginBottom: "16px" }}>
          404 — Page Not Found
        </h1>
        <p className="section-sub" style={{ margin: "0 auto 24px" }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: "inline-flex" }}>
          Back to Home
          <ArrowIcon size={18} />
        </Link>
      </div>
    </section>
  );
}
