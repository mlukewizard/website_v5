import React from 'react';
import styled from "styled-components";
import { DivBase } from "./base_components/bottom_level_components";


class TitleBar extends React.Component {
    constructor(props){
        /**
         * props must contain:
         * (string) image_location: api get request address
         * props can contain:
         * (string) bar_background_colour:
         */
        super(props);
        this.state = {
            small_screen: false,
            image_location: (this.props.image_location) ? this.props.image_location  : null,
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
        const IconDiv = styled(DivBase)`
        background-color: white;
        text-align: center;
        line-height: 30px;
        max-width:100%;
        max-height: 100%;
        height: 200px
        width: 800px
        object-fit=contain
        background-size=contain
       `;
      
      const BarDiv = styled(DivBase)`
        display: flex;
        flex-wrap: wrap;
        max-width:100%;
        justify-content: space-evenly;
        background-color: white;
        max-height: 200px
      `;
        return (
            <BarDiv>
                <IconDiv><img src={this.state.image_location} alt="Logo"/></IconDiv>
                <IconDiv><h1>Hi</h1></IconDiv>
            </BarDiv>
        );
    }
}
export default TitleBar;