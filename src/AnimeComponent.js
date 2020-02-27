import React, { Component } from "react";

const apiURL = "https://api.jikan.moe/v3/season/2019/summer";

export default class AnimeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(apiURL)
      .then(data => data.json())
      .then(data => {
        console.log(data.anime);
        this.setState({ data: data.anime });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          {this.state.data != null ? (
            this.state.data.map(anime => {
              return (
                <div key={anime.mal_id} className="col-md-3 anime">
                  <img alt="Anime Image" src={anime.image_url} />
                </div>
              );
            })
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    );
  }
}
