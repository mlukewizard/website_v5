import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopBar from './top_bar';

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
                    <TopBar />
                </div>
            </BrowserRouter>
        );
    };
}
export default App;