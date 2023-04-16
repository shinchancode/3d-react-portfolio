import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
      fetch('https://api.countapi.xyz/update/aarti/rathi/?amount=1')
        .then((res) => res.json())
        .then((resJson) => {
          const data = JSON.parse(resJson.value)
          setItems(data)
      }).catch((err) => {
        console.log(err.message);
       });
    }, [])

    return (
        <div className="footer text-center">
        <p> 
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="https://shinchancode.github.io/3d-react-portfolio/" target="_blank">
            {" "}
            Aarti Rathi
          </a>
          😎
        </p>
        <p className="pink-text-gradient">No. of Visitors | {items}</p>

      </div>
    );
  };
  
  export default Footer;