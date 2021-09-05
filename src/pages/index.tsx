import React from "react";
import FancyLink from "../components/shared/FancyLink";

import Header from "../components/shared/Header";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <p>Welcome to my personal website!</p>
        <p>
          {"The source code is on "}
          <FancyLink
            isExternal
            text="Github"
            to="https://github.com/pireads/pireads.github.io"
          />
          .
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
