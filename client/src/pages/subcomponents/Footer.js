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
      <p> Collin Didier </p> <br/>
        <a href="https://github.com/CDidier80"> GitHub </a>
        <p> Luis Rojas </p> <br />
        <a href="https://github.com/lrojash"> GitHub </a>
        <p> Lisa V Wand </p> <br />
        <a href="https://www.linkedin.com/in/lisa-venneker-wand-8413ab25/"> GitHub </a>
      </div>
    </div>
  )
}

export default Footer