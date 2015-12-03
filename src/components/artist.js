import React, { PropTypes } from 'react';
import jQuery from 'jquery';

class Artist extends React.Component {
  render () {
    return (
      <article className="artist hide" id="artistBox">
        <h2>{this.props.artist}</h2>
        <p>Followers: {this.props.followers}</p>
        <p>Genres: {this.props.genres}</p>
        <img src={this.props.image} alt="avatar"/>
        <a className="playBtn" href={this.props.play} target="_blank">Play Music</a>
      </article>
    )
  }
}

export default Artist;
