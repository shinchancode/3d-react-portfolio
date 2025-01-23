import { React, useState } from "react";
import "./Content.scss";
import { AiOutlineHome,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import {BsPersonWorkspace,BsTrophy} from "react-icons/bs"

// Uncommon line number 28 to 34 when you want to put projects

const Content = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
      <div className="nav">        
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#education"
          onClick={() => setActiveNav("#education")}
          className={activeNav === "#education" ? "active" : ""}
        >
          <BiBook />
        </a>
        {/* <a
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen />
        </a> */}

        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BsPersonWorkspace />
        </a>
        <a
          href="#achievements"
          onClick={() => setActiveNav("#achievements")}
          className={activeNav === "#achievements" ? "active" : ""}
        >
          <BsTrophy />
        </a>

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdMessage />
        </a>
      </div>
    );
  };

export default Content