import React, { useState } from "react";

import { myFooter } from "../services/references";

import "../styles/termAndCondition.css";

function TermAndCondition() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <p>
        ©Copyright 2024, Little Lemon |{" "}
        <button
          onClick={toggleModal}
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Terms & Conditions
        </button>
      </p>

      {isModalOpen && (
        <div className="term-condition-container">
          <div className="term-condition-content">
            <p>Terms & Conditions</p>
            <br />
            <p>{myFooter.termAndConditionONE}</p>
            <br />
            <p>{myFooter.termAndConditionTWO}</p>
            <br />
            <p>{myFooter.termAndConditionTHREE}</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TermAndCondition;
