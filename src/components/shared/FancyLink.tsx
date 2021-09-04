import React, { useState } from "react";
import { Link } from "gatsby";

const FancyLink = (props: {
  className?: string;
  isExternal?: boolean;
  text: string;
  to: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);

  let className = `${props.className || ""} link`;
  if (hasHovered) {
    className += ` ${isHovering ? "linkBold" : "linkNormal"}`;
  }

  return props.isExternal ? (
    <a
      className={className}
      href={props.to}
      onMouseEnter={() => {
        setIsHovering(true);
        setHasHovered(true);
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {props.text}
    </a>
  ) : (
    <Link
      className={className}
      to={props.to}
      onMouseEnter={() => {
        setIsHovering(true);
        setHasHovered(true);
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {props.text}
    </Link>
  );
};

export default FancyLink;
