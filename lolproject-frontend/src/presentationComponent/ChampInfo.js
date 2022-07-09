import React from "react";
import "./css/ChampInfo.css";
import SpellIcon from "./SpellIcon";
import ChampIcon from "./ChampIcon";

class ChampInfo extends React.Component {
  render() {
    return (
      <div className="champ_info">
        <ChampIcon champ={this.props.mychamp} />
        <SpellIcon spellName={this.props.spellName} />
        <div>{this.props.mychamp}</div>
      </div>
    );
  }
}
export default ChampInfo;
