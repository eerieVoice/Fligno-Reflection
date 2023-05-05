import React from "react";

function JournalTempR(props) {
  return (
    <div className=" w-[70rem] flex flex-row  items-center justify-center bg-neutral shadow-md">
      <div className="w-[100rem] p-10 text-right">
        <div className="text-secondary text-4xl mb-8">
          {props.content.title}
        </div>
        <div className="text-secondary text-2xl">{props.content.fill}</div>
        {props.link && (
          <a
            href={props.link}
            className="text-primary italic underline text-2xl hover:text-primarydark"
          >
            Here is the link
          </a>
        )}
      </div>
      <div className="w-[125rem] h-[90vh]">
        <img
          src={props.imageSource}
          className="h-[100%] object-cover object-center"
        />
      </div>
    </div>
  );
}

export default JournalTempR;
