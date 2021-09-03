import * as React from 'react'
import { Link } from "gatsby";
import { useState } from "react";

const FancyLink = (props: {
  to: string;
  className?: string;
  text: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);

  let className = `${props.className || ''} link`;
  if (hasHovered) {
    className += ` ${
      isHovering ? 'linkCW' : 'linkCCW'
    }`;
  }

  return (
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
