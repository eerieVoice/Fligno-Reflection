import React from "react";
import img1 from "../../assets/imgProfile/photoid1.png";

function BoxesL(props) {
  return (
    <div className="flex flex-row p-14 items-center justify-center bg-neutral shadow-lg">
      <div className="w-[30rem]">
        <img src={props.imageSource} className="shadow-md" />
      </div>
      <div className="w-[50rem] flex flex-col mt-8 m-10">
        <div className="text-4xl text-primary font-bold">
          {props.boxcontent.title}
        </div>
        <div className="text-xl font-Andika tracking-wider text-justify text-secondary font-semibold">
          {props.boxcontent.content}
        </div>
      </div>
    </div>
  );
}

export default BoxesL;
