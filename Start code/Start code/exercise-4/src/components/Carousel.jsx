import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, SetCurrentImage] = React.useState(0);
  /* You will need to hanle the click on left and right button */
  const left = () => {
    if (currentImage !== 0){
      SetCurrentImage(currentImage - 1);
    }
    else{
      SetCurrentImage(0);
    }
  }
  /* You will need to manage the cases when we are on the last image or first image*/
  const right = () => {
    if(currentImage === images.length -1 ){
      SetCurrentImage(0);
    }
    else{
      SetCurrentImage(currentImage + 1);
    }
  }
  console.log(currentImage)
  return (
    <div className="carousel">
      <button onClick={left}><BsArrowLeftCircleFill className="arrow arrow-left" /></button>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImage].src} alt={images[currentImage].alt} className="slide" />

      <button onClick={right}><BsArrowRightCircleFill className="arrow arrow-right" /></button>
    </div>
  );
};
