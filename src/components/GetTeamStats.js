import React from 'react';
import TeamPicker from '../components/TeamPicker.js';
const NBA = require("nba");

/* logs the following:
           {
             firstName: 'Stephen',
             lastName: 'Curry',
             playerId: 201939,
             teamId: 1610612744,
             fullName: 'Stephen Curry',
             downcaseName: 'stephen curry'
           }
           */


const GetTeamStats = ({ teamType, teamId }) => {
    var currStats = "";
    
    if ({teamId}.teamId != ""){
       // console.log(NBA.stats)
       let currStatsPromise = NBA.stats.teamStats({
            TeamID: {teamId}.teamId,
            Season: "2018-19"
        }).then(function(data){
            JSON.stringify(data).toString();
        });
        currStats = currStatsPromise.toString();
    }
    return (
        <div>
            {teamType}: {teamId}
            {currStats}
        </div>
    )
}
export default GetTeamStats;
