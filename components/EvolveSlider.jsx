"use client";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ba1 from "../public/assets/BA/BA1.png";
import ba10 from "../public/assets/BA/BA10.png";
import ba2 from "../public/assets/BA/BA2.png";
import ba3 from "../public/assets/BA/BA3.png";
import ba4 from "../public/assets/BA/BA4.png";
import ba5 from "../public/assets/BA/BA5.png";
import ba6 from "../public/assets/BA/BA6.png";
import ba7 from "../public/assets/BA/BA7.png";
import ba8 from "../public/assets/BA/BA8.png";
import ba9 from "../public/assets/BA/BA9.png";

const EvolveSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="mx-[10%] w-[80%] max-w-[1080px] lg:mx-auto"
    >
      <div>
        <Image src={ba1} alt="slide 1" className="slick-slide" />
      </div>

      <div>
        <Image src={ba2} alt="slide 2" className="slick-slide" />
      </div>
      <div>
        <Image src={ba3} alt="slide 3" className="slick-slide" />
      </div>
      <div>
        <Image src={ba4} alt="slide 4" className="slick-slide" />
      </div>
      <div>
        <Image src={ba5} alt="slide 5" className="slick-slide" />
      </div>
      <div>
        <Image src={ba6} alt="slide 6" className="slick-slide" />
      </div>
      <div>
        <Image src={ba7} alt="slide 7" className="slick-slide" />
      </div>
      <div>
        <Image src={ba8} alt="slide 8" className="slick-slide" />
      </div>
      <div>
        <Image src={ba9} alt="slide 9" className="slick-slide" />
      </div>
      <div>
        <Image src={ba10} alt="slide 10" className="slick-slide" />
      </div>
    </Slider>
  );
};

export default EvolveSlider;
