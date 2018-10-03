import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            example: 10
        };
    }

    render() {
        return (
            // WRAP BROWSERROUTER AROUND YOUR WHOLE APP
            <BrowserRouter>
                <div>
                    <h1>Example</h1>
                </div>
            </BrowserRouter>
        );
    };
}
export default App;