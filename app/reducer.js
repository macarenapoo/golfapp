import { UPDATE_HOLE } from './actions';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_HOLE:
      var score = state
      .players.filter( (player) => player.id === action.player )[0];
      score.score[action.hole] = parseInt(action.score);
      return Object.assign({}, state, score);


    default:
      return state;
  }
}
