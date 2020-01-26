import React from 'react'
import PropTypes from 'prop-types'

export class ComponentDiv extends React.Component {

    render() {
        const styleBlue = {
            background: "blue"
        }
        const styleRed = {
            background: "red"
        }
        return (
            <div className="ib page">
                <div style={this.props.isClicked ? styleRed : styleBlue} className="box">  </div>
            </div>
        )
    }
}

ComponentDiv.propTypes = {
    getColor: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
}