import styled from "styled-components";
import {Link} from "react-router-dom";
import React from 'react';

export class DivBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    };
  }
  
  export class UlBase extends React.Component {
    render() {
        return (
            <ul className={this.props.className}>
                {this.props.children}
            </ul>
        )
    };
  }
  
  export class LiBase extends React.Component {
    render() {
        return (
            <li className={this.props.className}>
                {this.props.children}
            </li>
        )
    };
  }