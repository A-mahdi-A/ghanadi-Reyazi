import React from "react";
import { Link } from "react-router-dom";
import LogoAMA from '../../assets/img/LogoAMA.png'
function Footer() {
  return (
    <>
      <footer lang="fa">
        <div id="LSidFooter">
            <h1>ریاضی به خوشمزگی شیرینی تازه </h1>
            <h5>ایمیل:ghanadiryazi@gmail.com | هفت روز هفته پاسخگو شما هستیم</h5>
            <h5>
                <Link>درباره ما</Link>
            </h5>
            <h5>تمامی حقوق این وب سایت مطعلق به قنادی ریاضی میباشد</h5>
        </div>
        <div id="RSidFooter">
            <img src={LogoAMA} alt="" />
            <h5>طراحی شده توسط AMA</h5>
        </div>
      </footer>
    </>
  );
}

export default Footer;
