import React from "react";
import "./css/ChampIcon.css";

class SpellIcon extends React.Component {
  render() {
    const imgSrc = "https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/";

    return (
      <div className="spells">
        {this.props.spellName.map((x, i) => {
          return (
            <div className="spell">
              <img
                className="spell_img"
                key={i}
                src={`${imgSrc}${x.spellName}.png`}
                alt={x.spellName}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default SpellIcon;
