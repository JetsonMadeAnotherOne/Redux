import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ComponentButton} from '../components/ComponentButton'
import {ComponentDiv} from '../components/ComponentDiv'
import {getColor} from '../actions/PageActions'


class App extends Component {
    render() {
        const {page, getColorAction} = this.props
        return (
            <div className="app">
                <ComponentDiv
                    isClicked={page.isClicked}
                    getColor={getColorAction}
                />
                <ComponentButton
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
