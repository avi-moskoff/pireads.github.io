import React from "react";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

import Job from "./Job";

const Experience = () => {
  return (
    <div>
      <Job
        address="https://github.com/pireads/pireads.github.io/"
        bullets={[
          {
            text: "Built a personal website using React, Typescript, and D3.",
          },
          {
            text: "Made my first open source contribution as a result.",
            link: {
              isExternal: true,
              linkText: "open source contribution",
              to: "https://github.com/mui-org/material-ui/pull/22247",
            },
          },
        ]}
        icon={faAtom}
        isFirst
        name="avi.me"
        time="2020-2021"
      />
      <Job
        address="https://projecteuler.net/"
        bullets={[
          {
            text:
              "Solved challenging problems involving math and computer science.",
          },
          {
            text:
              "Currently ranked in the top 1% of users for total problems solved.",
          },
        ]}
        icon={faPython}
        name="Project Euler"
        time="2016-2020"
      />
    </div>
  );
};

export default Experience;
