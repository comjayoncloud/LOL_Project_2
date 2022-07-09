import React from "react";
import "./css/Participants.css";
import ChampIcon from "./ChampIcon";

class Participants extends React.Component {
  render() {
    return (
      <div className="participants">
        <ul className="myteam-ul">
          {this.props.myTeam.map((x, i) => {
            return (
              <li className="li">
                <div className="icon">
                  <ChampIcon key={i} champ={x.champ} />
                </div>
                <div className="name"> {x.name}</div>
              </li>
            );
          })}
        </ul>
        <ul className="notmyteam-ul">
          {this.props.notmyTeam.map((x, i) => {
            return (
              <li className="li">
                <div className="icon">
                  <ChampIcon key={i} champ={x.champ} />
                </div>
                <div className="name"> {x.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Participants;
