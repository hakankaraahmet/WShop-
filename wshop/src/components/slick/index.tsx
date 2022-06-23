import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      title: "Title1",
      imgUrl:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Title2",
      imgUrl:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1392&q=80",
    },
    {
      title: "Title3",
      imgUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {data.map((item: any) => (
          <div className=" w-full h-[600px] ">
            <img src={item.imgUrl} alt="furniture-img" className="object-cover h-[600px] w-full"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
