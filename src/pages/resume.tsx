import React from "react";

import Header from "../components/shared/Header";
import Resume from "../components/resume/Resume";

const ResumePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Resume />
      </div>
    </div>
  );
};

export default ResumePage;
