import React from "react";
import Slideshow from "./Slideshow";
import kjhacdsf from "../Images/1.webp";
import kjhacdsf1 from "../Images/4.png";
import kjhacdsf2 from "../Images/8.png";

const slides = [
    kjhacdsf ,
    kjhacdsf1,
    kjhacdsf2 ,
];

function SlidAll() {
  return (
    <div>
      <Slideshow slides={slides} />
    </div>
  );
}

export default SlidAll;
