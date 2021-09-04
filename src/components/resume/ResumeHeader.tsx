import React from "react";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeHeader = (props: { icon: IconDefinition; title: string }) => {
  return (
    <div className="resumeHeader">
      <hr className="resumeLine" />
      <FontAwesomeIcon className="resumeIcon fa-fw" icon={props.icon} />
      {props.title}
    </div>
  );
};

export default ResumeHeader;
