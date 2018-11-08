import React from 'react';
import styled from "styled-components";

const CalcFantasyPoints = ({ columns, player}) => {
    var fantasyPoints = 0.0;
    for(let setting in columns){
        fantasyPoints += (columns[setting] * player[setting]);

    }
   // console.log(fantasyPoints)
   // console.log("columns "+ columns.fga + " | player " + player.fga)
    return (
        <>
            {Math.floor(fantasyPoints * 10 )/10}
        </>
    )
};
const Wrapper = styled.div`
 

`
export default CalcFantasyPoints;

// +" "+ player[setting]