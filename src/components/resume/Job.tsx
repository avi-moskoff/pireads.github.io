import React from "react";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import Bullet from "./Bullet";
import FancyLink from "../shared/FancyLink";

const Job = (props: {
  address: string;
  bullets: {
    text: string;
    link?: { isExternal?: boolean; linkText: string; to: string };
  }[];
  icon: IconDefinition;
  isFirst?: boolean;
  location?: string;
  name: string;
  position?: string;
  time: string;
}) => {
  const bullets = props.bullets.map((bulletText) => (
    <Bullet
      icon={props.icon}
      key={bulletText.text}
      text={bulletText.text}
      link={bulletText.link}
    />
  ));
  return (
    <div>
      {props.isFirst ? null : <hr className="resumeLine" />}
      <div className="resumeColumns">
        <FancyLink isExternal text={props.name} to={props.address} />
        <div>{props.time}</div>
        <div>{props.position}</div>
        <div>{props.location}</div>
      </div>
      {bullets}
    </div>
  );
};

export default Job;
