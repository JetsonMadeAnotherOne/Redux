import React from 'react'
import PropTypes from 'prop-types'

export class ComponentButton extends React.Component {

    render() {
        return (
            <div className="ib page">
                <button className="btn" onClick={this.props.getColor}>
                    Click me
                </button>
            </div>
        )
    }
}

ComponentButton.propTypes = {
    getColor: PropTypes.func.isRequired,
}