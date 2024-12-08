import React from "react";
import chacklet from "../../assets/img/chacklet.png";
import { Link } from "react-router-dom";
function Rside() {
  return (
    <>

      <div id="RsideDIV">
        {/* titel */}
        <div id="titel">
          <div>
            <img src={chacklet} alt="" />
          </div>
          <div>
            <h1>شیرین تر از شکلات</h1>
          </div>
        </div>

        {/* text */}
        <div>
          <p>
            قنادی ریاضی با هدف برقرای عدالت آموزشی ساخته شده<br /> و مباحث ریاضی پایه را
            به ساده ترین ، شیرین ترین روش<br /> و تنوع در راه حل ها برای یادگیری بهتر
            دانش آموزان عزیز<br /> فراهم نموده
          </p>
        </div>
        {/* btn */}
        <div id="buttoneT"> <button>
          <Link>درباره ما</Link>
        </button></div>
      </div>
    </>
  );
}

export default Rside;
