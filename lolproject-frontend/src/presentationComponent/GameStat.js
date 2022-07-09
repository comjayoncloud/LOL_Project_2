import React from "react";
import "./css/GameStat.css";

class GameStat extends React.Component {
  render() {
    return (
      <div className="game_stat">
        <div className="kda">{this.props.stat}</div>
      </div>
    );
  }
}
export default GameStat;
