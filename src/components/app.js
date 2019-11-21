import React from 'react';
import Characterlist from './characterlist'
import '../styles/index.css'
import Herolist from './Herolist'
import SquardStats from './SquardStats'


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h2>superSquard</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Characterlist />
                    </div>
                    <div className="col-md-4">
                        <Herolist />
                    </div>
                    <div className="col-md-4">
                        <SquardStats />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;