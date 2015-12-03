import React from 'react'

import Search from './search';
import Artist from './artist';

class Artists extends React.Component {
  render () {
    return (
      <div className="main">
        <Search/>
        <Artist/>
      </div>
    )
  }
}

export default Artists;
