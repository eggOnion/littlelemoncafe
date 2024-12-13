import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

import "../styles/underConstruction.css";

function OrderOnline() {
  return (
    <main className="content-page">
      <section className="order-online">
        <section className="construction-section">
          <article className="construction-page">
            <div className="construction-page-icon">
              <FontAwesomeIcon icon={faPersonDigging} />
            </div>
            <p>Stay Tune! We are updating our content currently</p>
          </article>
        </section>
      </section>
    </main>
  );
}

export default OrderOnline;
