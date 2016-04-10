import React, { PropTypes } from 'react';
import ScoreCard from './ScoreCardScreen';

class ScoreCardContainer extends React.Component {
  render () {
    const store = this.props.store;
    const state = store.getState();
    const updateHole = ( player, hole, score) => {
      store.dispatch({
        type: "UPDATE_HOLE",
        player: player,
        hole: hole,
        score: score
      });
    }

    return (
      <ScoreCard state={ state } update={ updateHole } />
    )
  }
}

export default ScoreCardContainer;
