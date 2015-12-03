import React from 'react';

class Artist extends React.Component {
  render () {
    return (
      <div className="artist">
        <h2>Melon & The Mayhem</h2>
        <p>Followers: 24</p>
        <img src="http://www.fillmurray.com/60/60"/>
        <a className="playBtn" href="#">Play Music</a>
      </div>
    )
  }
}

export default Artist;
