import React from 'react';
import styled from "styled-components";



const LeagueSettings = ({ settingChange, leagueSettings }) => {

    const years = [
        ((new Date().getYear() - 100) + 2000) + "-" + ((new Date().getYear() - 100) + 1),
        ((new Date().getYear() - 101) + 2000) + "-" + ((new Date().getYear() - 101) + 1),
        ((new Date().getYear() - 102) + 2000) + "-" + ((new Date().getYear() - 102) + 1),
    ];  //2018-19
    const perGame = [
        "PerGame", "Totals"
    ];
    return (
        <Settings className="row">
            <h5>League Settings</h5>
            <hr />
            <div className="seasonSettings">
            </div>
            <div className="fields">

                <label>Season:<br/>
                <select name="season" value={leagueSettings.season} onChange={settingChange()}>
                        {years.map((index) => <option key={index} value={index}>{index}</option>)}
                    </select>
                </label>
                <label>Per Mode:<br/>
                <select name="perMode" value={leagueSettings.perGame} onChange={settingChange()}>
                        {perGame.map((index) => <option key={index} value={index}>{index}</option>)}
                    </select>
                </label>
                {Object.keys(leagueSettings.stats).map(function (keyName, keyIndex) {
                    return <label key={keyIndex}>{keyName.toUpperCase()}:<br/><input type="number" name={keyName} value={leagueSettings.stats[keyName]} onChange={settingChange("stats")} /></label>
                })}

            </div>
        </Settings>
    )
};
//<button className="btn-warning" type="button" onClick={_handleClick()}>Update</button>
const Settings = styled.div`
    &{
        padding:10px 30px;
        background-color: #e2f4ff;
        border: 1px solid #ededed;
        text-align: left;
    }
    hr{
        width: 100%;
        margin: 5px 0px;
    }
    h5{
        font-weight: bold;
        text-transform: uppercase;
    }
    .seasonSettings{

        width: 100%;
    }
    .fields{
        display: inline-block;
    }
    label {
        font-size: .75em;
        text-align: left;
        font-weight: bold;
        margin: 0px 5px 10px;
        display: inline-block;
    }
    input, select{
        width:60px;
        border-radius: 0;
        height: 30px;
        text-align:right;
    }
    select{
        width: 85px;
    }
    
    
`
export default LeagueSettings;