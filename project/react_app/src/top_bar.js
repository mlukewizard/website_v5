import { theme_constants } from './global_constants'
import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { UnderlineUnderHoverLink } from "./base_components/components";

class DivBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    };
}

const Div2 = styled(DivBase)`
  background-color: ${theme_constants.fake_white};
  text-align: center;
  line-height: 30px;
  font-size: ${theme_constants.standard_font_size};
  font-family: ${theme_constants.font};
 `;

const Div1 = styled(DivBase)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly
  background-color: ${theme_constants.fake_white};
`;


class TopBar extends React.Component {
    // TODO pass the links in as an object to TopBar
    render() {
        return (
            <Div1>
                <Div2><UnderlineUnderHoverLink to="/about">First</UnderlineUnderHoverLink></Div2>
                <Div2><UnderlineUnderHoverLink to="/about">Second</UnderlineUnderHoverLink></Div2>
                <Div2><UnderlineUnderHoverLink to="/about">Third</UnderlineUnderHoverLink></Div2>
            </Div1>
        );
    }
}
export default TopBar;