import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
    onBtnClick = () => {
        this.props.getColor()
    }

    render() {
        const {isClicked} = this.props
        return (
            <div className="ib page">
                <button className="btn" onClick={this.onBtnClick}>
                    Click me
                </button>
                {' '}
            </div>
        )
    }
}

Page.propTypes = {
    getColor: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
}