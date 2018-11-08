import React from 'react';
import styled from "styled-components";



const LeagueSettings = ({ settingChange, columns}) => {


    
    return (
      <Wrapper>
        <h3>League Settings</h3>
        <hr />
        <div className="fields">
            {Object.keys(columns).map(function(keyName, keyIndex) {
                return <label>{keyName.toUpperCase()}: <input type="number" name={keyName} value={columns[keyName]} onChange={settingChange}/></label> 
            // use keyName to get current key's name
            // and a[keyName] to get its value
            })}
           
        </div>
    </Wrapper>
    )
};
 //<button className="btn-warning" type="button" onClick={_handleClick()}>Update</button>
const Wrapper = styled.div`
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
        margin-right:10px;
        display: flow-root;
        justify-content: space-between;
    }
    input{
        width:50px;
        text-align:center;
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