import React from "react";
import SercelEtehad from "./sercelEtehad";
import speedImg from '../../assets/img/speed.png'
function LernsSectione() {
  return (
    // start the section
    <section id="LernSectone">
      {" "}
      <div id="titelLernPage">
        <h1>سریع به هدفت برس</h1>
        <img src={speedImg} alt="" />
      </div>
      <div id="ParentDivs">
        <SercelEtehad />
      </div>
    </section>
  );
}

export default LernsSectione;
