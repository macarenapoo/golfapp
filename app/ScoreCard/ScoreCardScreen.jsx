import React, { PropTypes } from 'react';
import styles from './ScoreCardScreen.css';

const ScoreCard = React.createClass({
  render () {
    const state = this.props.state,
      courseName = state.course.name,
      holes = state.course.holes,
      players = state.players,
      coursePar = holes.map( (hole) => ( hole.par) ),
      updateHole = this.props.update;

    const sumScore = ( score ) => {
      if( score.length === 0) return 0;
      return score
        .filter((hole) => { return ( !isNaN(hole) )})
        .reduce( (a,b) => a +b );
    }

    const relativeToPar = ( score1, score2 ) => {
      if( score1.length === 0) return 0;
      const total = score1.map( (hole, index) => {
        if( isNaN(hole) ) return 0;
        return hole - score2[index];
      }).reduce( (a,b) => a + b );
      if( total > 0) return "+" + total;
      return total;
    }

    return (
      <div>
        <h3>{ courseName }</h3>
        <div className={ styles.cardContainer }>
          <table className={ styles.card }>
            <thead>
              <tr className={ styles.blueRow }>
                <th></th>
                { holes.map( (hole, index) => {
                    return (
                      <th className={ styles.hole }>{ index + 1}</th>
                    )
                  })
                }
                <th></th>
                <th></th>
              </tr>
              <tr className={ styles.grayRow }>
                <td className={styles.grayHeader }>Par</td>
                { holes.map( (hole, index) => {
                    return (
                      <td className={ styles.grayCell }>{ hole.par }</td>
                    )
                  })
                }
                <td className={ styles.playerTotal }>{ sumScore( coursePar ) }</td>
                <td></td>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              { players.map( (player, index) => {
                return (
                  <tr className={ styles.playerRow }>
                    <td className={ styles.playerName }>{ player.name }
                      <span className={ styles.playerHcp }>({ player.hcp })</span>
                    </td>
                    { holes.map( (hole,index) => {
                      return (
                        <td>
                          <input
                             className={ styles.input }
                             type="text"
                             onChange={ (e) => {
                               updateHole( player.id, index, e.target.value )
                             }} value={player.score[index]}/>
                        </td>
                      )
                    })}
                    <td className={ styles.playerTotal }>{ sumScore( player.score ) }</td>
                    <td className={ styles.playerTotalHcp }>{ relativeToPar( player.score , coursePar ) }</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className={ styles.grayRow }>
                <td className={styles.grayHeader }>HCP</td>
                { holes.map( (hole, index) => {
                  return (
                    <td className={ styles.grayCell }>{ hole.hcp }</td>
                  )
                }) }
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
})

export default ScoreCard;
