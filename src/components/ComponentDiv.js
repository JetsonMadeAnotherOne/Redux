import React from 'react'
import PropTypes from 'prop-types'

export class ComponentDiv extends React.Component {

    render() {
        const style = {
            background: this.props.background
        }
        return (
            <div className="ib page">
                <div style={style} className="box">  </div>
            </div>
        )
    }
}

ComponentDiv.propTypes = {
    background: PropTypes.string.isRequired
}