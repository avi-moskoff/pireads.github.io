import React from "react";
import {
  faChessRook,
  faCode,
  faDraftingCompass,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import ResumeHeader from "./ResumeHeader";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="resume">
      <ResumeHeader icon={faGraduationCap} title="EDUCATION" />
      <Education />
      <ResumeHeader icon={faChessRook} title="SKILLS" />
      <Skills />
      <ResumeHeader icon={faCode} title="EXPERIENCE" />
      <Experience />
      <ResumeHeader icon={faDraftingCompass} title="PROJECTS" />
      <Projects />
    </div>
  );
};

export default Resume;
