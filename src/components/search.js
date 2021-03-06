import React from 'react';

class Search extends React.Component {
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
        <input id="search"
               ref="searchBox"
               className="search"
               type="text"
               placeholder="Search for an artist..."
               onKeyUp={this.handleEnter}/>
         <i    className="fa fa-exclamation-circle"
               id="errorIcon"></i>
             <p className="errorMsg"
                id="errorMsg">Your search did not return any results.</p>
        <button id="submitBtn"
                type="submit"
                className="search"
                onClick={this.handleEnter}>Search
        </button>
      </div>
    )
  }
}

export default Search;

// value={this.props.value}
