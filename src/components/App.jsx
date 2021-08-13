import React, { Component } from 'react';
import SongsTable from './SongsTable/SongsTable';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SongsTable songs={this.state} />
        )
    }
}

export default App;