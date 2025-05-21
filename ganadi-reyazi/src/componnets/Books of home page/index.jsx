import React from "react";
import candi from '../../assets/img/candi.png'
import One from "./One";
import Tow from "./Tow";
import Three from "./Three";


function Books() {
  return (
    <>
      <section id="Books">
        <div id="TitelBooks">
          <h1>ریاضی به شیرینی <span>آبنبات</span></h1>
          <img src={candi} alt="" />
        </div>
        <div id="booksParent">
          <One/>
       
          <Three/>
          <Tow/>
        </div>
      </section>
    </>
  );
}

export default Books;
