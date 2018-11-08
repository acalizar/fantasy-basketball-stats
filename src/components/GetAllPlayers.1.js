import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import LeagueSettings from "../components/LeagueSettings.js";
import CalcFantasyPoints from "../components/CalcFantasyPoints.js";
const NBA = require("nba");
/* 
   PerMode: Totals, PerGame
   Season: 2018-2019
   SeasonType: Playoffs, Regular Season
*/
const nbaObj = NBA;
/*
NBA.stats.playerInfo({Season: "2018-19", PlayerID: "203932"}).then(function(playerInfo){
    console.log(playerInfo)
}).catch(function(error){console.log(error)});
*/

export class GetAllPlayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nbaStats: [],
            mapper: []
        };
    }

    componentDidMount() {
        NBA.stats.playerStats({ Season: "2018-19", SeasonType: "Regular Season", PerMode: "PerGame" }).then((playerInfo) => this.setState({ "nbaStats": playerInfo.leagueDashPlayerStats })).catch((error) => console.log(error));

    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render() {   
        
        const leagueSettings = {
            fga: this.state.fga || 0, 
            fgm: this.state.fgm || 0, 
            fta: this.state.fta || 0, 
            ftm: this.state.ftm || 0, 
            fG3A: this.state.fg3a || 0, 
            fG3M: this.state.fg3m || 0, 
            oreb: this.state.oreb || 0, 
            dreb: this.state.dreb || 0, 
            ast: this.state.ast || 0, 
            stl: this.state.st || 0, 
            blk: this.state.blk || 0, 
            tov: this.state.to || 0
        };
        

        const mapper = [];
        const playerData = JSON.parse(JSON.stringify(this.state.nbaStats));
        console.log(playerData)

        playerData.map((player) => mapper.push({
            ftrank: player.nbaFantasyPtsRank,
            players: player.playerName,
            pos: player.pos,
            team: player.teamAbbreviation,
            fpt: <CalcFantasyPoints leagueSettings={leagueSettings} player={player} />,
            min: player.min,
            fga: player.fga,
            fgm: player.fgm,
            fta: player.fta,
            ftm: player.ftm,
            fg3a: player.fG3A,
            fg3m: player.fG3M,
            oreb: player.oreb,
            dreb: player.dreb,
            ast: player.ast,
            st: player.stl,
            blk: player.blk,
            to: player.tov
        }));


        const data = mapper;

        const columns = [

            {
                Header: 'FTRank',
                accessor: 'ftrank',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            },
            {
                Header: 'Players',
                accessor: 'players' // String-based value accessors!
            },
            /*{
                Header: 'Position',
                accessor: 'pos' // String-based value accessors!
            },*/
            {
                Header: 'Team',
                accessor: 'team' // String-based value accessors!
            },
            {
                Header: 'Fantasy PT',
                accessor: 'fpt',
                Cell: props => <span className='number'>{props.value}</span>
            },
            {
                Header: 'Min',
                accessor: 'min',
                Cell: props => <span className='number'>{props.value}</span>
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
                accessor: 'fg3a',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: '3PTM',
                accessor: 'fg3m',
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
                accessor: 'st',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'BLK',
                accessor: 'blk',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'TO',
                accessor: 'to',
                Cell: props => <span className='number'>{props.value}</span>
            }
        ]
        return (
            <div className="row">
                <div className="col-md-2">
                    <LeagueSettings handleChange={this.handleChange} columns={columns} />  
                </div>
                <div className="col-md-10">

                    <ReactTable
                        data={data}
                        columns={columns} 
                        resolveData={data => data.map(row => row)}
                        defaultSorted={[
                            {
                              id: "ftrank"
                            }
                          ]}
                    />

                    {nbaObj.players.length} Players
                </div>
            </div>
        )
    }
};
export default GetAllPlayers;


        /*
        data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
        }];
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }]
            <> 
            
            {curry.firstName}
            
            <ReactTable
                data={data}
                columns={columns}
            />
            </>
        );*/