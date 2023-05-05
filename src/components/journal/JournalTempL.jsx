import React from "react";

const JournalTempL = (props) => {
  return (
    <div className=" w-[70rem] flex flex-row  items-center justify-center shadow-md">
      <div className="w-[125rem] h-[90vh]">
        <img
          src={props.imageSource}
          className="h-[100%] object-cover object-center"
        />
      </div>
      <div className="w-[100rem] p-10">
        <div className="text-neutral text-4xl mb-8">{props.content.title}</div>
        <div className="text-neutral text-2xl text-left">
          {props.content.fill}
        </div>
      </div>
    </div>
  );
};

export default JournalTempL;
