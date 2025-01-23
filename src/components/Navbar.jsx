import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo} from "../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain logo' />
          <p className='sm:block text-white text-[18px] font-bold cursor-pointer flex '>
          varun.wadhwa
          </p>
        </Link>

        <div className='sm:flex gap-5'>
          <div
              className={`top2 hover:text-white text-[25px] font-bold cursor-pointer`}
            >
              <a href="https://drive.google.com/file/d/1lPgKq3Jxt67PAsKILgwAbFH3BP2kV5v5/view?usp=sharing" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar