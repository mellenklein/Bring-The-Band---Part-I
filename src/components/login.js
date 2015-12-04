import React from 'react';

class Login extends React.Component {
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

        <button id="submitBtn"
                type="submit"
                className="search"
                onClick={this.handleEnter}>Log in
        </button>
      </div>
    )
  }
}

export default Login;

// value={this.props.value}
