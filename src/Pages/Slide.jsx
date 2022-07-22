import React from 'react'
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
const Slide = () => {

  const slides = [{
    id:1,
    img : 'https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg'
  },
  {
     id:2,
     img:'https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg'
   },
   {
    id:3,
    img:'https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg'
  },]

  return (
    <div>
         <Carousel infiniteLoop autoPlay showThumbs={true}>
      {slides.map((slide) => {
        return (
          <Image key={slide.id} src={slide.img} height="auto" width="800px" />
        );
      })}
    </Carousel>
    </div>
  )
}

export default Slide