import React from "react";
import BoxesR from "./boxes/BoxesR";
import details from "../data/Profile_Data";
import BoxesL from "./boxes/BoxesL";
import img from "../assets/imgProfile/photoid1.png";
import img1 from "../assets/imgProfile/gradpic.jpg";
import exp from "../assets/imgProfile/exp1.jpg";
import pass from "../assets/imgProfile/passion.jpg";
import interest from "../assets/imgProfile/wow.jpg";
import skills from "../assets/imgProfile/skills.png";

function Profile() {
  return (
    <div className="min-w-[100%] h-100 bg-secondary flex flex-col box-border text-neutral">
      <BoxesR boxcontent={details.ABOUT_ME} imageSource={img} />
      <BoxesL boxcontent={details.EDUCATION} imageSource={img1} />
      <BoxesR boxcontent={details.EXPERIENCE} imageSource={exp} />
      <BoxesL boxcontent={details.PASSION_VALUES} imageSource={pass} />
      <BoxesR boxcontent={details.PERSONAL_INTEREST} imageSource={interest} />
      <BoxesL boxcontent={details.SKILLS} imageSource={skills} />
    </div>
  );
}

export default Profile;
