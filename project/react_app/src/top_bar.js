import React from 'react';
import styled from "styled-components";
import { UnderlineUnderHoverLink } from "./base_components/components";
import { DivBase } from "./base_components/bottom_level_components";


class TopBar extends React.Component {
    constructor(props){
        /**
         * props must contain:
         * (dictionary) bar_components: of form {"display_test":"link"}
         * props can contain:
         * (string) bar_background_colour:
         * (string) font_family: 
         * (string) font_size: of form "Ypx"
         */
        super(props);
        this.state = {
            small_screen: false,
            bar_components: (this.props.bar_components) ? this.props.bar_components  : [{display_text: "Put your text here", route: "/"}],
            bar_background_color: (this.props.bar_background_color) ? this.props.bar_background_color  : "gray",
            font_family: (this.props.font_family) ? this.props.font_family  : "Arial",
            font_size: (this.props.font_size) ? this.props.font_size  : "12px",
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.set_small_screen_state.bind(this));
        this.set_small_screen_state();
    }
    
    set_small_screen_state() {
        this.setState({small_screen: window.innerWidth <= 500});
    }

    render() {
        
        const LinkDiv = styled(DivBase)`
        background-color: ${this.state.bar_background_color};
        text-align: center;
        line-height: 30px;
        font-size: ${this.state.font_size};
        font-family: ${this.state.font_family};
       `;
      
      const BarDiv = styled(DivBase)`
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly
        background-color: ${this.state.bar_background_color};
      `;

        let button;
        if (this.state.small_screen) {
            button = <h1>HIDING NAV</h1>;
          } else {
            button = <h1>SHOWING NAV</h1>;
          }

        return (
            <BarDiv>
                {this.state.bar_components.map((bar_component, index) => {
                    return <LinkDiv key={index}><UnderlineUnderHoverLink to={bar_component.route} color="inherit">{bar_component.display_text}</UnderlineUnderHoverLink></LinkDiv>
                })}
            </BarDiv>
        );
    }
}
export default TopBar;