import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Artists from './artists';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      artist: [],
      followers: [],
      image: []
    };
  }
  componentDidMount() {
    this.getArtists();
  }

  getArtists() {
    let query = document.getElementById('search').value.toString();
    let newQuery = query.split(' ').join('%20');
    let apiLink = ('https://api.spotify.com/v1/search?q=' + newQuery + '&type=artist');
    console.log(apiLink);
    $.ajax(apiLink).then( response => {
      let artists = response.artists.items;
      // console.log(artists.items[0].name);

      this.setState({
        hasLoaded: true,
        artist: artists[0].name,
        followers: artists[0].followers.total,
        image: artists[0].images[0].url,
        play: artists[0].external_urls.spotify
      });
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Band Wagon</h1>
          <p>Bring the band of your dreams to town!</p>
          <nav>
            <Link to="profile">Profile</Link>
            <Link to="/">Search</Link>
            <Link to="login">Login</Link>
          </nav>
        </header>
        <Artists artist={this.state.artist}
                 hasLoaded={this.state.hasLoaded}
                 followers={this.state.followers}
                 image={this.state.image}
                 play={this.state.play}/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
