import React from 'react';
import styled from "styled-components";

export class Header extends React.Component {
    render() {
        return (
            <Wrapper>
                <h1>NBA Fantasy Stats</h1>
            </Wrapper>
        );
    }
};
export default Header;

const Wrapper = styled.div`
    h1 {
        margin: 30px 0px;
    }

`