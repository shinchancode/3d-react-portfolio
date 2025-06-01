import { React, useState } from "react";
import "./Content.scss";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

const Content = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="nav">
      <a
        title="Home"
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        title="Education"
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        title="Projects"
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        title="Experience"
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsPersonWorkspace />
      </a>
      <a
        title="Contact"
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdMessage />
      </a>
    </div>
  );
};

export default Content;
