import React from 'react';
import $ from 'jquery';

import Search from './search';
import Artist from './artist';

class Artists extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let artist = this.props.artist;
    let followers = this.props.followers;
    let image = this.props.image;
    let play = this.props.play;
    let genres = this.props.genres;
    let value = this.props.value;
    return (
      <div className="main">
        <Search handleValue={this.props.handleSearch}/>
        <ul>
          <Artist artist={artist}
                  followers={followers}
                  image={image}
                  play={play}
                  genres={genres}/>
        </ul>
      </div>
    )
  }
}

export default Artists;
