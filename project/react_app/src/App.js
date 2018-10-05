import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopBar from './top_bar';
import { theme_constants } from './global_constants'
import TitleBar from './title_bar';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            example: 10
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <TopBar bar_components={[{display_text: "First", route: "/"}, 
                                            {display_text: "Second", route: "/"},
                                            {display_text: "Third", route: "/"}]}
                            bar_background_color={theme_constants.fake_white}
                            font_family={theme_constants.font}
                            font_size={theme_constants.standard_font_size} />
                    <TitleBar image_location="https://cdn.shopify.com/s/files/1/0489/4081/products/cycling-road-bike-style-2-decal.jpg?v=1407795610" />
                </div>
            </BrowserRouter>
        );
    };
}
export default App;