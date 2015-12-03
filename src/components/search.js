import React from 'react';

class Search extends React.Component {
  render () {
    return (
      <div>
        <input id="search" className="search" type="text" value="melon and the mayhem" placeholder="Search for an artist..."/>
      </div>
    )
  }
}

export default Search;
