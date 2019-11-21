import React from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions'
//import { bindActionCreators } from 'redux'

class Herolist extends React.Component {
    render() {
        return (
            <div>
                <h4>your hero squard</h4>
                <ul className="list-group">
                    {
                        this.props.heros.map(hero => {
                            return (
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">{hero.name}</div>
                                    <div className="list-group right-button"
                                        onClick={() => this.props.removeCharacterById(hero.id)}
                                    >
                                        x
                                </div>
                                </li>

                            )
                        })
                    }
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

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({}, dispatch)
// }

export default connect(mapStateToProps, { removeCharacterById })(Herolist);