import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCharactersById } from '../actions'

class characterList extends React.Component {

    render() {
        //    console.log(this.props)
        return (
            <div>
                <h4>characters</h4>
                <ul className="list-group">
                    {this.props.characters.map(list => {
                        return (
                            <li key={list.id} className="list-group-item">
                                <div className="list-group">{list.name}</div>
                                <div className="list-group right-button"
                                    onClick={() => this.props.addCharactersById(list.id)}
                                >
                                    +
                                </div>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addCharactersById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(characterList);