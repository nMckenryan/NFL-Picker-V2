import React, { Component } from "react";
import { Container, Button, Carousel, Image } from "react-bootstrap";
//import "./style/style.css";

export default class Spinner extends Component {
  //CUTTING DOWN CODE: https://www.freecodecamp.org/forum/t/importing-images-in-react/206974/3
  constructor(props) {
    super(props);
    // this.state = {
    //   fullTeamArray: [],
    // };
    console.log("constructor launched");
  }

  componentDidMount() {
    console.log("COMPONENT MOUNTED" + this.props.teamArray);

    this.setState({ fullTeamArray: this.props.teamArray });
    // console.log("ARRAY" + JSON.stringify(this.state.fullTeamArray)});

    // this.setState({ fullTeamArray: JSON.stringify(this.props.teamArray) });
    console.log("STATE UPDATED");
  }

  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      console.log("ITEM NAME: " + item);
      images[item.replace("./", "")] = r(item);
    });
    console.log("IMAGES:" + JSON.stringify(images));
    return images;
  };

  render() {
    const images = this.importAll(
      require.context("./images", false, /.(png|jpe?g|svg)$/)
    );

    return (
      <div>
        {this.props.teamArray.map((team, id) => {
          return (
            <div>
              <h1>{team.name}</h1>
              <p>{team.message}</p>
              {console.log("IMAGES: " + team.logo + images[team.logo])}
              <img src={images[team.logo]} alt="yeet" />
              {/* // REVIEW THIS ARTIVLE
              https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack#_=_ */}
            </div>
          );
        })}
      </div>
    );
  }
}
