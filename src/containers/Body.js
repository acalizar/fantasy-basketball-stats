import React from 'react';
import TeamPicker from '../components/TeamPicker.js';
import GetTeamStats from '../components/GetTeamStats.js';
import GetAllPlayers from '../components/GetAllPlayers.js';
import styled from "styled-components";

export class Body extends React.Component {

    render() {
        return (
            
            <GetAllPlayers />
        )
    }
};
export default Body;

/*<>
                <TeamPicker />
                <FindPlayer />
            </>
            */