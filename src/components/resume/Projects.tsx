import React from "react";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faAtom, faRobot } from "@fortawesome/free-solid-svg-icons";

import Job from "./Job";

const Experience = () => {
  return (
    <div>
      <Job
        address="https://www.sisepuedefoundation.org/"
        bullets={[
          {
            text: "Mentored two local middle school robotics teams.",
          },
          {
            text: "Nominated by students for the Compass Award at the Arizona FIRST Tech Challenge State Championships.",
          },
        ]}
        icon={faRobot}
        isFirst
        name="Binary Bots and Da Geese Of Freedom FTC Teams"
        time="2022-Present"
      />
      <Job
        address="https://github.com/pireads/pireads.github.io/"
        bullets={[
          {
            text: "Built a personal website using React, Typescript, and D3.",
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
            text: "Solved challenging problems involving math and computer science.",
          },
          {
            text: "Currently ranked in the top 1% of users for total problems solved.",
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
