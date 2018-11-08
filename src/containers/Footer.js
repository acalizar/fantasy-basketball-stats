import React from 'react';
import styled from "styled-components";

export class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
                <div className="row">
                    <div className="col-sm-6 left">
                        <p>NBA Predictions</p>
                    </div>
                    <div className="col-sm-6 right">
                        <p>2018-2019</p>
                    </div>
                </div>
            </Wrapper>
        );
    }
};
const Wrapper = styled.div`
    font-size: 1em;
    color: #777;
    margin-top:50px;
    border-top:1px solid #dedede;
    padding-top: 25px;
    .left, .right{
        text-align:center
    }  
    
    @media (min-width: 576px){
        .left{text-align:left}
        .right{text-align:right}
    }
`
export default Footer;
