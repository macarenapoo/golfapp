import React, { PropTypes } from 'react';
import ScoreCard from './ScoreCard/';

const App = React.createClass({
  render ( ) {
    const store = this.props.store;

    return (
      <div>
        <ScoreCard store={ store }/>
      </div>
    )
  }
})

export default App;
