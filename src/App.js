import React, { Component } from "react";
import "./styles.css";
import AnimeComponent from "./AnimeComponent";
// import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const apiURL = "https://api.jikan.moe/v3/season/2019/winter";

export default class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: {},
  //     input: ""
  //   };
  // }

  // componentDidMount() {
  //   fetch(apiURL)
  //     .then(data => data.json())
  //     .then(data => {
  //       console.log(data.anime);
  //       this.setState({ data: data });
  //     });
  // }

  render() {
    return (
      <div className="container">
        <header>
          <h3>
            <b>Anime Characters App</b>
          </h3>
        </header>

        <hr />

        <AnimeComponent />

        <hr />

        <footer>
          <p>Copyright © 2020</p>
        </footer>
      </div>
    );
  }
}
