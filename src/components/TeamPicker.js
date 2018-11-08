import React from 'react';
import styled from "styled-components";
import Option from '../components/Option.js';
import GetTeamStats from '../components/GetTeamStats.js'
const NBA = require("nba");
const teams = NBA.teams;

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

export class TeamPicker extends React.Component {
    
    state = {homeTeam:"", awayTeam:""}
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {
        return (
            <Wrapper>
                <div className="row">
                    <div className="col-sm-6">
                        <label>Home Team:<br />
                            <select type="text" name="homeTeam" value={this.state.homeTeam}  onChange={this.handleChange} >
                                <option></option>
                                {teams.map((team) => <Option key={team.teamId} teamName={team.teamName} teamId={team.teamId}/>)}
                            </select>
                        </label>
                        <div className="teamStats">
                            <GetTeamStats key={"homeTeam"} teamType="Home" teamId={this.state.homeTeam} />                        
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label>Away Team:<br />
                            <select type="text" name="awayTeam" value={this.state.awayTeam} onChange={this.handleChange} >
                                <option></option>
                                {teams.map((team) => <Option key={team.teamId} teamName={team.teamName} teamId={team.teamId}/>)}
                            </select>
                        </label>
                        <div className="teamStats">
                            <GetTeamStats key={"homeTeam"} teamType="Away" teamId={this.state.awayTeam} />                      
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
};
const Wrapper = styled.div`
    

`
export default TeamPicker;
