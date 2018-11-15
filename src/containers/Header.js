import React from 'react';
import styled from "styled-components";
import YahooOauth from "../components/YahooOauth.js";
import Authenticate from "../components/Authenticate.js";
//import Navigation from "../components/Navigation.js";

export class Header extends React.Component {
    render() {
        return (
            <>
                <Authenticate />
                <HeaderWrapper className="row">
                    <div className="col-sm-6">
                        <a href="/"><h1>NBA Fantasy Stats</h1></a>
                    </div>
                    <div className="col-sm-6 login">
                        <YahooOauth />
                    </div>
                </HeaderWrapper>
            </>
        );
    }
};
export default Header;

const HeaderWrapper = styled.div`
    & {
        padding: 10px 30px;
        background-color: #0c33a7; 

    }
    .login {
        text-align: right;
        float: right;
    }
    a:hover{
        text-decoration: none;
    }
    h1 {
        font-size: 2em;
        text-align: left;
        margin: 0px;
        color: #ffffff;
    }

`