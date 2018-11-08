import React from 'react';
import styled from "styled-components";

const Option = ({teamName, teamId}) => { 
        return (           
            <option value={teamId}>{teamName}</option>            
        )
};
const Wrapper = styled.div`
    label {
        font-weight: bold;
    }

`
export default Option;
