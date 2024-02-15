import React from "react";
import CompC from "../CompC/CompC";

const CompB = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <p>
            The term “history” and "history object" in this documentation refers
            to the history package, which is one of only 2 major dependencies of
            React Router (besides React itself), and which provides several
            different implementations for managing session history in JavaScript
            in various environments.
          </p>
        </div>
      </div>
      <CompC />
    </>
  );
};

export default CompB;
