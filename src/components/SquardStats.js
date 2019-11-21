import React from 'react';
import { connect } from 'react-redux';


class SquardStats extends React.Component {

    strength() {
        let strength = 0
        this.props.heros.forEach(hero => {
            strength += hero.strength
        });
        return strength
    }


    speed() {
        let speed = 0
        this.props.heros.forEach(hero => {
            speed += hero.speed
        });
        return speed
    }


    intelligence() {
        let intelligence = 0
        this.props.heros.forEach(hero => {
            intelligence += hero.intelligence
        });
        return intelligence
    }

    render() {
        return (
            <div>
                <h4>Squard Stats</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Overall Strength: </b>{this.strength()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Speed: </b>{this.speed()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Intelligence: </b>{this.intelligence()}
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        heros: state.heros
    }
}

export default connect(mapStateToProps, null)(SquardStats)