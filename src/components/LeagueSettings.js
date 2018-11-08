import React from 'react';
import styled from "styled-components";



const LeagueSettings = ({ settingChange, leagueSettings}) => {

    const years = [
        ((new Date().getYear() - 100) + 2000) + "-" + ((new Date().getYear() - 100) + 1),
        ((new Date().getYear() - 101) + 2000) + "-" + ((new Date().getYear() - 101) + 1),
        ((new Date().getYear() - 102) + 2000) + "-" + ((new Date().getYear() - 102) + 1),
    ];  //2018-19
    
    return (
      <Settings>
        <h3>League Settings</h3>
        <hr />
        <div className="fields">
            <label>SEASON: 
                <select name="season" value={leagueSettings.season} onChange={settingChange()}>
                {years.map((index) => <option key={index} value={index}>{index}</option>)}
                </select>
            </label> 
            {Object.keys(leagueSettings.stats).map(function(keyName, keyIndex) { 
                return <label key={keyIndex}>{keyName.toUpperCase()}: <input type="number" name={keyName} value={leagueSettings.stats[keyName]} onChange={settingChange("stats")}/></label> 
            })}
           
        </div>
    </Settings>
    )
};
 //<button className="btn-warning" type="button" onClick={_handleClick()}>Update</button>
const Settings = styled.div`
    &{
        padding:20px;
        background-color: #fff2ca;
        border: 1px solid #ededed;
    }
  
    .fields{
        display: inline-block;
    }
    h3{ 
        text-align:center
    }
    label {
        text-align:right;
        font-weight: bold;
        margin: 0px 5px 10px;
        display: flow-root;
        justify-content: space-between;
    }
    input, select{
        width:90px;
        border-radius: 0;
        height: 30px;
        text-align:right;
        margin-left: 10px;
    }

    
    
`
export default LeagueSettings;

/*
        <Wrapper>
            <h3>League Settings</h3>
            <hr />
            <div className="fields">
                 {columns.map((field) => <label>{field.Header}: <input type="number" name="fga" onChange={handleChange}/></label>)}
            </div>
        </Wrapper>

        */

        /*
 {columns.map((key) => <label>{columns.toUpperCase()}: <input type="number" name={columns} value={columns[key]} onChange={handleChange}/></label> )}

{Object.keys(columns).map(function(keyName, keyIndex) {
             return <label>{keyName.toUpperCase()}: <input type="number" name={keyName} value={columns[keyName]} onChange={handleChange}/></label> 
        // use keyName to get current key's name
        // and a[keyName] to get its value
        })}*/