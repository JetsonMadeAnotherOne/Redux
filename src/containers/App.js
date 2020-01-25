import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Page} from '../components/Page'
import {getColor} from '../actions/PageActions'

class App extends Component {
    render() {
        const {page, getColorAction} = this.props

        const styleBlue = {
            background: "blue"
        }
        const styleRed = {
            background: "red"
        }

        return (
            <div className="app">
                <div style={page.isClicked ? styleBlue : styleRed} className="box"> </div>
                <Page
                    isClicked={page.isClicked}
                    getColor={getColorAction}
                />

            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getColorAction: () => dispatch(getColor()),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
