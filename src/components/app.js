import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class App extends React.Component {
  
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
        {this.props.children}
      </div>
    )
  }
}

export default App;
