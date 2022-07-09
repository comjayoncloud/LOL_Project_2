import React from "react";
import "./css/MatchInfo.css";

class MatchInfo extends React.Component {
  render() {
    const props = this.props;
    if (props.winNlose == "승") {
      return (
        <div className="body">
          <div className="match_info_win">{props.children}</div>
        </div>
      );
    } else if (props.winNlose == "패")
      return (
        <div className="body">
          <div className="match_info_lose">{props.children}</div>
        </div>
      );

    return (
      <div className="body">
        <div className="match_info">{props.children}</div>
      </div>
    );
  }
}
export default MatchInfo;
