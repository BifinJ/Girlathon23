import Wave from "../wave/wave";
import "./Footer.css";

import React from "react";

export default function FooterSamp() {
  return (
    <section>
      <div className="Footer row" style={{ margin: "0px" }}>
        <div
          className="Footer-Top"
          style={{ position: "relative", zIndex: "3" }}
        >
          <a href="#">
            <img src="/images/GDSC.png" alt="" />
            <span>GDSC MACE</span>
          </a>
          <p>Connect with Us</p>
          <div className="social">
            <a href="https://x.com/gdsc_mace?s=20" target="_blank">
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/gdsc_mace?igsh=MTIwaTdwY3IwaWJnZw=="
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/gdsc-mace/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div
          className="Footer-Bottom"
          style={{ position: "relative", zIndex: "4" }}
        >
          <Wave />
          <p style={{ color: "white", position: "absolute", zIndex: "7" }}>
            &#169;Copyright GDSC MACE. All Rights Reserved. <br />
            Designed by Team Girlathon
          </p>
        </div>
      </div>
    </section>
  );
}
