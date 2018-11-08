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
            mapper: [],
            leagueSettings: {fga: 2, fgm: 0, fta: 0, ftm: 0, fG3A: 0, fG3M: 0, oreb: 0, dreb: 0, ast: 0, stl: 0, blk: 0, tov: 0}
        };
    }

    componentDidMount() {
        
        const leagSet = this.state.leagueSettings;

        NBA.stats.playerStats({ Season: "2018-19", SeasonType: "Regular Season", PerMode: "PerGame" }).then((playerInfo) => {
            const nbaStats = playerInfo.leagueDashPlayerStats;
            this.setState({ "stats": nbaStats });

            const mappedObj = [];
            this.state.nbaStats.map((player, index) => { mappedObj[index] = { ...player, 
                    fpnt: <CalcFantasyPoints columns={leagSet} player={player} /> 
                } 
            });
            
            this.setState({ "mapper": mappedObj });

        }).catch((error) => console.log(error));


    }
    settingChange = (e) => {
        const settings = this.state.leagueSettings;
        settings[e.target.name] = e.target.value;

        this.forceUpdate();
        
    }

    render() {
        
        const playerData = this.state.mapper;
        //const leagSet = this.state.leagueSettings;    
        const data = playerData;

        const columns = [

            {
                Header: 'FTRank',
                accessor: 'nbaFantasyPtsRank',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            },
            {
                Header: 'Players',
                accessor: 'playerName' // String-based value accessors!
            },
            /*{
                Header: 'Position',
                accessor: 'pos' // String-based value accessors!
            },*/
            {
                Header: 'Team',
                accessor: 'teamAbbreviation' // String-based value accessors!
            },
            {
                Header: 'Fantasy PT',
                accessor: 'fpnt',
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
            <div className="row">
                <div className="col-md-2">
               
                    <LeagueSettings key={this.state.leagueSettings} settingChange={this.settingChange} columns={this.state.leagueSettings} />
                </div>
                <div className="col-md-10">

                    <ReactTable
                        data={data}
                        //resolveData={data => data.map(row => row)}
                        columns={columns}
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
 {Object.keys(leagSet).map(function(keyName, keyIndex) {
                    return keyName + " " + leagSet[keyName] + " "
                })}



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