import React, { Component, useRef, useState } from "react";
import { Layout, Carousel, Button, Slider } from "antd";
import pic from "./images/bears.jpg";

const Spinner = ({ teamArray }) => {
  //CUTTING DOWN CODE: https://www.freecodecamp.org/forum/t/importing-images-in-react/206974/3
  const [slide, setSlide] = useState(0);

  const slider = useRef();
  //Imports all the images from local storage to be webpack compatible.
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      console.log("ITEM NAME: " + item);
      images[item.replace("./", "")] = r(item);
    });
    console.log("IMAGES:" + JSON.stringify(images));
    return images;
  };

  const images = importAll(
    require.context("./images", false, /.(png|jpe?g|svg)$/)
  );

  // goToSlide = (number) => {
  //   goTo(number);
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div>
      <Carousel
        {...settings}
        ref={(ref) => {
          console.log(ref);
          slider.current = ref;
        }}
      >
        {teamArray.map((team, id) => {
          return (
            <div>
              <p>{team.name}</p>
              <img src={pic} alt="yeet" />
              {team.message}

              {/* <img src={images[team.logo]} alt="yeet" /> */}
            </div>
          );
        })}
      </Carousel>
      <Button
        onClick={(e) => {
          let rand = Math.round(Math.random() * 31);
          //        this.state.slide.setState(e);
          slider.current.goTo(rand);
          console.log(rand);
        }}
      >
        SPIN
      </Button>
    </div>
  );
};

export default Spinner;
