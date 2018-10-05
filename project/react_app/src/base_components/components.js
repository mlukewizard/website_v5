import styled from "styled-components";
import {Link} from "react-router-dom";
import React from 'react';


export const UnderlineUnderHoverLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
