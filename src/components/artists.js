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
    return (
      <div className="main">
        <Search/>
        <ul>
          <Artist artist={artist}
                  followers={followers}
                  image={image}
                  play={play}/>
        </ul>
      </div>
    )
  }
}

export default Artists;
