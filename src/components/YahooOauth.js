import React from 'react';
import styled from "styled-components";
const hello = require('hellojs/dist/hello.all.js');
const fantasyIcon = require("../images/fantasy.png");

export class YahooOauth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    componentDidMount() {
        const online = function (session) {
            var currentTime = (new Date()).getTime() / 1000;
            return session && session.access_token && session.expires > currentTime;
        };
        const yh = hello('yahoo');
        yh.getAuthResponse();

        this.setState({ loggedIn: online(yh) ? true : false });

        console.log("Logged In: ", this.state.loggedIn)
    }
    settingChange = type => (e) => {

    }
    login = (e) => {
        let yh = hello('yahoo');
        yh.init(
            {yahoo: 'dj0yJmk9dzNRc3JPcVJWWVQzJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTA3'},
            {redirect_uri: 'https://dev--ant-fbb.netlify.com/auth'} //'http://127.0.0.1:3000/auth'}
        )/*
        yh.on('auth.login', function (auth) {
            // Call user information, for the given network
            hello(auth.network).api('me').then(function (r) {
                // Inject it into the container
                console.log("Logged in as " + r.name)
            }).catch((err) => { console.error(err) });
        });

        */
        return yh.login().then(function() {
            console.log('You are signed in to Facebook');
        }, function(e) {
            console.error('Signin error: ' + e.error.message);
        });
    }

    render() {

        return (
            <Wrapper>
                <button className="btn" onClick={this.login} ><img alt="Login" src={fantasyIcon} /> <strong>{this.state.loggedIn === false ? "Log In" : "Log Out"}</strong></button>
            </Wrapper>
        )
    }
};
const Wrapper = styled.div`
    &{  
        .btn{
            transition: ease-in-out all .2s;
            display: none;
        }
        .btn:hover{
            background-color: #ededed;
        }
        .btn img {
            max-height: 25px;
            vertical-align: middle;
        }
    }
`
export default YahooOauth;