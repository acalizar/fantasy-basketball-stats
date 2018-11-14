import React from 'react';
import styled from "styled-components";

export class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper className="row">
                <a href="/"><h1>NBA Fantasy Stats</h1></a>
            </HeaderWrapper>
        );
    }
};
export default Header;

const HeaderWrapper = styled.div`
    & {
        padding: 10px 30px;
        background-color: #0c33a7; 

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