import React from "react";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FancyLink from "../shared/FancyLink";

const Bullet = (props: {
  icon: IconDefinition;
  text: string;
  link?: { isExternal?: boolean; linkText: string; to: string };
}) => {
  let textWithLink: {};
  if (props.link) {
    const regex = new RegExp(`(.*)${props.link.linkText}(.*)`);
    const brokenText = props.text.match(regex);
    textWithLink = (
      <span>
        {brokenText[1]}
        <FancyLink
          isExternal={props.link.isExternal}
          text={props.link.linkText}
          to={props.link.to}
        />
        {brokenText[2]}
      </span>
    );
  }
  return (
    <span className="resumeBulletLine">
      <FontAwesomeIcon
        className="resumeBullet resumeIcon fa-fw"
        icon={props.icon}
      />
      {props.link ? textWithLink : props.text}
    </span>
  );
};

export default Bullet;
