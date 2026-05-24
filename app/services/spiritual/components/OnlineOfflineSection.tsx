"use client";
import React from "react";

export default function OnlineOfflineSection() {
  return (
    <section className="sp-section">
      <div className="sp-container">
        <div className="sp-split-layout">
          <div className="sp-split-card sp-online">
            <h3 className="sp-split-title">Online Services</h3>
            <ul className="sp-split-list">
              <li>✦ WhatsApp Booking</li>
              <li>✦ Google Form Intake</li>
              <li>✦ Online Consultation</li>
              <li>✦ Live Homam Streaming</li>
              <li>✦ PDF Reports</li>
              <li>✦ Recorded Sankalpam Video</li>
              <li>✦ Personalized Remedy Instructions</li>
            </ul>
          </div>
          <div className="sp-split-card sp-offline">
            <h3 className="sp-split-title">Offline Services</h3>
            <ul className="sp-split-list">
              <li>✦ Temple Poojas</li>
              <li>✦ House Visits</li>
              <li>✦ Festival Special Poojas</li>
              <li>✦ Direct Homam Arrangements</li>
              <li>✦ Spiritual Event Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
