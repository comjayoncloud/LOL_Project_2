import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import {
  MatchInfo,
  ChampInfo,
  GameStat,
  GameType,
  Participants,
  Input,
} from "./presentationComponent";
import "./app.css";

const App = () => {
  const [id, setId] = useState(null);
  console.log(id);
  // 함수형 컴포넌트 : function 으로 정의하고 return 문에 jsx 코드를 반환
  // get data
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const url = `http://13.57.243.145:8080/api/allinfo?id=${id}`;
      console.log(url);
      const data = await axios.get(url);
      setData(data.data);
    }
    fetchData();
  }, [id]);

  const tmp = {
    spellName: [
      { spellName: "SummonerFlash" },
      { spellName: "SummonerSnowball" },
    ],
  };

  return (
    <div>
      <Input onChange={setId} />
      <div className="main">
        <ul className="all_list">
          {data &&
            data.map((data, index) => (
              <li className="one_list">
                {
                  <MatchInfo winNlose={data.gameResult}>
                    <GameType
                      type={data.gameType}
                      result={data.gameResult}
                    ></GameType>
                    <ChampInfo
                      spellName={tmp.spellName}
                      mychamp={data.champName}
                    ></ChampInfo>
                    <GameStat stat={data.gameStat} />
                    <Participants
                      myTeam={data.myTeam}
                      notmyTeam={data.notmyTeam}
                    />
                  </MatchInfo>
                }
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
