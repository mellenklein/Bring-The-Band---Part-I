import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    if (e.which === 13 || e.target.id==="submitBtn") {
      this.props.handleValue(this.refs.searchBox.value);
      // console.log(this.refs.searchBox.value);
    }
  }

  // $.ajaxSetup({
  //   headers: {
  //     // "X-Parse-Application-Id": "mXLFn3Jz9RdCEgqT4etZ6uWAeK1kbnd3aFrXWkT3",
  //     // "X-Parse-REST-API-Key": "djHbXcpE3zjL8zJjTk9GE0ONDMOBdWdLJJoj8cbq"
  //   },
  //   url: 'http://api.parse.com/1/users'
  // })

  render () {
    return (
      <div>
        <input id="email"
               ref="email"
               className="email"
               type="text"
               placeholder="Email"
               onKeyUp={this.handleEnter}/>
        <input id="pwd"
               ref="pwd"
               className="pwd"
               type="password"
               placeholder="Password"
               onKeyUp={this.handleEnter}/>
        <input id="pwd"
               ref="pwd"
               className="pwd"
               type="password"
               placeholder="Confirm password"
               onKeyUp={this.handleEnter}/>

        <button id="submitBtn"
                type="submit"
                className="search"
                onClick={this.handleEnter}>Sign up
        </button>
      </div>
    )
  }
}

export default Register;

// value={this.props.value}
