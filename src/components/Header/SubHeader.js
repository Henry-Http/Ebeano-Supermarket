import React from "react";

export default function SubHeader(props) {
  return (
    <div className="header-cover hidden">
      <div className="header2 ">
        <img src={props.pic} alt="" className="w-12" />
        <p className="img-text ">{props.text}</p>
      </div>
    </div>
  );
}
