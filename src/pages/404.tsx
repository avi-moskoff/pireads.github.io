import React from "react";

import Header from "../components/shared/Header";

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h3>That page doesn't exist yet, but here's a haiku:</h3>
        <p>Error: 404</p>
        <p>Link not found, like the next line</p>
        <p className="transparent">Or is it hiding?</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
