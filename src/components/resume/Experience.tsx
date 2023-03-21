import React from "react";
import {
  faBroadcastTower,
  faCamera,
  faCodeBranch,
  faCodeCompare,
  faSatellite,
} from "@fortawesome/free-solid-svg-icons";

import Job from "./Job";

const Experience = () => {
  return (
    <div>
      <Job
        address="https://www.gitkraken.com/"
        bullets={[
          {
            text: "Implemented a new design for the left panel of the application.",
          },
          {
            text: "Owned code responsible for instrumenting the GitKraken Client with Open Telemetry.",
          },
          {
            text: "Visualized telemetry information in order to assist in making data driven design decisions.",
          },
        ]}
        icon={faCodeCompare}
        isFirst
        location="Scottsdale, Arizona"
        name="GitKraken"
        position="Software Development Engineer"
        time="2022-Present"
      />
      <Job
        address="https://www.gitkraken.com/"
        bullets={[
          {
            text: "Implemented a filter for commits in the GitKraken graph.",
          },
          {
            text: "Made a dynamic carousel for avatar selection.",
          },
          {
            text: "Wrote a tutorial about a Git operation for the marketing team.",
            link: {
              isExternal: true,
              linkText: "tutorial",
              to: "https://www.gitkraken.com/learn/git/problems/git-push-tag",
            },
          },
        ]}
        icon={faCodeBranch}
        location="Scottsdale, Arizona"
        name="GitKraken"
        position="Software Development Intern"
        time="2020-2021"
      />
      <Job
        address="https://ren-fengbo.lab.asu.edu/"
        bullets={[
          {
            text: "Ported compressive sensing algorithms to PyTorch for meta-analysis.",
          },
          {
            text: "Co-authored a paper.",
            link: {
              isExternal: true,
              linkText: "paper",
              to: "https://arxiv.org/abs/2103.00652",
            },
          },
        ]}
        icon={faCamera}
        location="Tempe, Arizona"
        name="ASU Parallel Systems and Computing Laboratory"
        position="Undergraduate Research Assistant"
        time="2020"
      />
      <Job
        address="https://www.atec.army.mil/epg/"
        bullets={[
          {
            text: "Obtained a secret security clearance.",
          },
          {
            text: "Researched and developed a modern alternative to paper data collection.",
          },
        ]}
        icon={faBroadcastTower}
        location="Fort Huachuca, Arizona"
        name="Jacobs Technology"
        position="Software Development Intern"
        time="2019"
      />
      <Job
        address="https://web.archive.org/web/20180816045338/https://lefthandrobotics.com/"
        bullets={[
          {
            text: "Implemented an OTA software deployment system.",
          },
          {
            text: "Programmed hardware used for differential GPS measurements.",
          },
        ]}
        icon={faSatellite}
        location="Longmont, Colorado"
        name="Left Hand Robotics"
        position="Software Development Intern"
        time="2017-2018"
      />
    </div>
  );
};

export default Experience;
