import React, { Component } from "react";
import "./styles.css";
import AnimeComponent from "./AnimeComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
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
