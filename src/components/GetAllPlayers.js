import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import LeagueSettings from "../components/LeagueSettings.js";
import CalcFantasyPoints from "../components/CalcFantasyPoints.js";
import styled from "styled-components";
import NBA from "nba"
//const NBA = require("nba");
/* 
   PerMode: Totals, PerGame
   Season: 2018-2019
   SeasonType: Playoffs, Regular Season
*/
const nbaObj = NBA;
console.log(NBA);
/*
NBA.stats.playerInfo({Season: "2018-19", PlayerID: "203932"}).then(function(playerInfo){
    console.log(playerInfo)
}).catch(function(error){console.log(error)});
*/

export class GetAllPlayers extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stats: [],
            leagueSettings: {
                perMode: "PerGame",
                season: ((new Date().getYear() - 100) + 2000) + "-" + ((new Date().getYear() - 100) + 1), //2018-19
                stats:{fga: -.3, fgm: 2.3, fta: -.5, ftm: 1.3, fG3A: -.2, fG3M: 1.45, oreb: 1.5, dreb: 1, ast: 2, stl: 2.5, blk: 2.5, tov: -1.5} //update stats from Yahoo
            }
        };
    }
    getStats = () => {
        NBA.stats.playerStats({ Season: this.state.leagueSettings.season, SeasonType: "Regular Season", PerMode: this.state.leagueSettings.perMode }).then((playerInfo) => {
            const nbaStats = playerInfo.leagueDashPlayerStats;
            this.setState({ "stats": nbaStats });
        }).catch((error) => console.log(error)); 
    }
    componentDidMount() {
        NBA.stats.playerStats({ Season: this.state.leagueSettings.season, SeasonType: "Regular Season", PerMode: this.state.leagueSettings.perMode }).then((playerInfo) => {
            const nbaStats = playerInfo.leagueDashPlayerStats;
            this.setState({ "stats": nbaStats });
        }).catch((error) => console.log("nope", error)); 
    }
    settingChange = type => (e) => {
        const settings = type != undefined ? this.state.leagueSettings[type] : this.state.leagueSettings;

        settings[e.target.name] = e.target.value;
        this.forceUpdate();
        this.getStats();
    }

    calc = (stats, settings) => {
        const fantasyPoints = Object.entries(settings).reduce((total, [key,index]) => {
            return total + (settings[key] * stats[key]);
          }, 0.0)
        return (Math.round(fantasyPoints * 10 ) / 10);
    }
    
    render() {
        const {stats, leagueSettings} = this.state;
        
        const playerData = Object.entries(stats).map(
            ([key, value]) => {
              return {
                ...stats[key],
                index: key,
                fpnt: this.calc(stats[key], leagueSettings.stats)
              };
            }
          );

        const data = playerData;
        const columns = [
            {
                Header: 'FTRank',
                accessor: 'nbaFantasyPtsRank',
                Cell: props => <span className='number'>{props.value}</span>,
                defaultSortDesc: false
            },
            {
                Header: 'Player',
                accessor: 'playerName',
                filterable: true,
                filterMethod: (filter, row) => row[filter.id].toLowerCase().includes(filter.value.toLowerCase()),
                defaultSortDesc: false
            },
            /*{
                Header: 'Position',
                accessor: 'pos' // String-based value accessors!
            },*/
            {
                Header: 'Team',
                accessor: 'teamAbbreviation',
                filterable: true,
                filterMethod: (filter, row) => row[filter.id].toLowerCase().includes(filter.value.toLowerCase()),
                defaultSortDesc: false
            },
            {
                Header: 'Fantasy PT',
                accessor: 'fpnt',
                Cell: props => <span className='number'>{props.value}</span>
            },
            {
                Header: 'GP',
                accessor: 'gp',
                Cell: props => <span className='number'>{props.value}</span>
            },
            {
                Header: 'MIN',
                accessor: 'min',
                Cell: props => <span className='number'>{Math.round(props.value)}</span>
            },
            {
                Header: 'FGA',
                accessor: 'fga',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'FGM',
                accessor: 'fgm',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'FTA',
                accessor: 'fta',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'FTM',
                accessor: 'ftm',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: '3PTA',
                accessor: 'fG3A',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: '3PTM',
                accessor: 'fG3M',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'OREB',
                accessor: 'oreb',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'DREB',
                accessor: 'dreb',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'AST',
                accessor: 'ast',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'ST',
                accessor: 'stl',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'BLK',
                accessor: 'blk',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'TO',
                accessor: 'tov',
                Cell: props => <span className='number'>{props.value}</span>
            }
        ]
        return (
            <Wrapper>
                <div >
                    <div>
                        <LeagueSettings settingChange={this.settingChange} leagueSettings={this.state.leagueSettings} />
                    </div>
                    <div className="main-table">
                        <ReactTable
                            data={data}
                            //resolveData={data => data.map(row => row)}
                            columns={columns}
                            pageSizeOptions={[10, 15, 25, 50, 100]}
                            defaultPageSize={10}
                            defaultSortDesc={true}
                            defaultSorted={[
                                {
                                    id: "fpnt",
                                    desc: "false"
                                }
                            ]}
                        />
                    </div>
                     {nbaObj.players.length} Players
                </div>
            </Wrapper>
        )
    }
};
const Wrapper = styled.div`
    .main-table input{
        text-align: center;
        
    }
    .main-table{
        width: 100%;
        margin: 10px auto;
    }
    

        

`
export default GetAllPlayers;