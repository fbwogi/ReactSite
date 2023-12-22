import React from 'react';
import "/Users/festobwogi/Desktop/Personal Website/src/styles/styles.css"
//import "./styles/styles.css"

import backgroundImage from "/Users/festobwogi/Desktop/Personal Website/src/images/image.jpeg";
//import backgroundImage from "./images/image.jpeg"

export default function Header() {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // or 'contain' depending on your needs
        backgroundPosition: "center",
        height: "500px", // Adjust the height as needed
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        color: "white" // If you want to add text and need to change its color
      };
    
    return (
  
      <header style={headerStyle}>
          <h1 style={{fontFamily: 'cursive'}}> {" "} Festo Bwogi </h1>
          <p >
            {" "}
            Graduate Student | Data Science | Computer Science and Engineering | IT Solutions | IT Management{" "}
          </p>
      </header>
    );
};