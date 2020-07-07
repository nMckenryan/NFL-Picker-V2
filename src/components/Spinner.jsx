import React, { useRef } from "react";
import { Carousel, Button, Card } from "antd";
import imageArray from "./importImages";

const Spinner = ({ teamArray }) => {
  const slider = useRef();

  return (
    <div>
      <Carousel
        className="center"
        centerMode="true"
        infinite="true"
        centerPadding="60px"
        slidesToShow={3}
        speed={500}
        ref={(ref) => {
          slider.current = ref;
        }}
      >
        {teamArray.map((team, id) => {
          return (
            <Card>
              <img src={imageArray[id]} alt={team.name} class="center" />
              <h1>{team.name}</h1>
              <p>{team.message}</p>
            </Card>
          );
        })}
      </Carousel>

      <Button
        onClick={(e) => {
          let rand = Math.round(Math.random() * 31);
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
