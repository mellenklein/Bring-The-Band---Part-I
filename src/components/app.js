import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Artists from './artists';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleServerResponse = this.handleServerResponse.bind(this);
    this.getArtists = this.getArtists.bind(this);

    this.state = {
      hasLoaded: false,
      artist: [],
      followers: [],
      image: [],
      genres: []
    };
  }
  componentDidMount() {
    // this.getArtists();
  }

  handleServerResponse(response) {
    console.log('hi in server response', response);
    let artists = response.artists.items;
    let inputBox = $('#search');
    let errorIcon = $('#errorIcon');
    let errorMsg = $('#errorMsg');
    console.log(response.artists.items[0]);
    if(artists[0] === undefined) {
      inputBox.addClass('searchError');
      errorIcon.addClass('searchError');
      errorMsg.addClass('searchError');
      alert('your search did not return any results.');
      return
    }
    let artistBox = $('#artistBox');
    artistBox.removeClass('hide');
    inputBox.removeClass('searchError');
    errorIcon.removeClass('searchError');
    errorMsg.removeClass('searchError');

    this.setState({
      hasLoaded: true,
      artist: artists[0].name,
      followers: artists[0].followers.total,
      image: artists[0].images[0].url,
      play: artists[0].external_urls.spotify,
      genres: artists[0].genres[0]
    });
  }

  getArtists(value) {
    // console.log(value);
    let query = value;
    let newQuery = query.split(' ').join('%20');
    let apiLink = ('https://api.spotify.com/v1/search?q=' + newQuery + '&type=artist');
    $.ajax(apiLink).then(this.handleServerResponse);
  }

  handleSubmit() {
    let query = document.getElementById('search').value.toString();
    let submit = document.getElementById('submitBtn');
    submit.click(function() {
      console.log('you clicked the submit btn!');
    });
  }

  render() {
    console.log('render ran');
    return (
      <div>
        <header>
          <h1>Welcome to Band Wagon</h1>
          <p>Bring the band of your dreams to town!</p>
          <nav>
            <Link to="register">Register</Link>
            <Link to="/">Search</Link>
            <Link to="login">Login</Link>
          </nav>
        </header>
        <Artists artist={this.state.artist}
                 hasLoaded={this.state.hasLoaded}
                 followers={this.state.followers}
                 image={this.state.image}
                 play={this.state.play}
                 genres={this.state.genres}
                 value={this.state.value}
                 handleSearch={this.getArtists}/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
