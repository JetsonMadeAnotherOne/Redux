import React from 'react'
import PropTypes from 'prop-types'

export class ComponentButton extends React.Component {
    onBtnClick = () => {
        this.props.getColor()
    }

    render() {
        return (
            <div className="ib page">
                <button className="btn" onClick={this.onBtnClick}>
                    Click me
                </button>
            </div>
        )
    }
}

ComponentButton.propTypes = {
    getColor: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
}