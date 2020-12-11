import React from 'react';

const style = {
  backgroundColor: "#3F51B5",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  fontFamily: "Roboto",
  fontWeight: "bolder"
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const Footer = () => {
  return (
    <div>
      <div style={phantom}></div>
      <div style={style}>  
      <p> Open Source coded by: Collin Didier, Luis Rojas and Lisa V. wand </p> 
        <a href="https://github.com/CDidier80/portfolio-host"> GitHub </a> 
      </div>
    </div>
  )
}

export default Footer