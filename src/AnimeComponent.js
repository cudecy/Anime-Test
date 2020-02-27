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
        this.setState({ data: data.anime });
      });
  }

  handleImageClick(id) {
    if (document.getElementById(id).hasAttribute("hidden"))
      document.getElementById(id).removeAttribute("hidden");
    else document.getElementById(id).setAttribute("hidden", true);
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          {this.state.data != null ? (
            this.state.data.map(anime => {
              return (
                <div key={anime.mal_id} className="anime">
                  <img
                    alt="Anime"
                    src={anime.image_url}
                    onClick={() => this.handleImageClick(anime.mal_id)}
                  />
                  <div id={anime.mal_id} className="animeComponents" hidden>
                    <div>{anime.synopsis}</div>
                    <br />
                    <div>
                      <label>
                        <b>
                          <u>List of characters</u>
                        </b>
                      </label>
                      <div>
                        This api does not have list of characters
                        (anime.characters is undefined).
                      </div>
                    </div>
                  </div>
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
