import React from "react";
import img from "../assets/imgJournal/fam.jpg";
import content from "../data/JournalContent";
import JournalTempR from "./journal/JournalTempR";
import JournalTempL from "./journal/JournalTempL";
import img1 from "../assets/imgJournal/fligno.jpg";
import img2 from "../assets/imgJournal/wow.jpg";
import img3 from "../assets/imgJournal/winner.png";
import img4 from "../assets/imgJournal/game.png";

const Journal = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className=" w-[70rem] flex flex-row justify-center bg-neutral shadow-md ">
        <div className="w-[100rem] p-10">
          <div className="font-extrabold text-7xl text-primarydark drop-shadow-2xl shadow-primary mb-60">
            Journal
          </div>
          <div className="text-secondary text-4xl mb-8">
            {content.firstbox.title}
          </div>
          <div className="text-secondary text-2xl">{content.firstbox.fill}</div>
        </div>
        <div className="w-[120rem] h-[90vh]">
          <img src={img} className="h-[100%] object-cover object-center" />
        </div>
      </div>
      <JournalTempL content={content.secondbox} imageSource={img2} />
      <JournalTempR content={content.thirdbox} imageSource={img1} />
      <JournalTempL content={content.fourthbox} imageSource={img3} />
      <JournalTempR
        content={content.fifthbox}
        imageSource={img4}
        link={"https://algorandtictactoe.vercel.app/"}
      />
    </div>
  );
};

export default Journal;
