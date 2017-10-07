import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Map from '../components/Map'
import MapControls from '../components/MapControls'
import * as Actions from '../actions'
import '../styles/index.css';

const App = ({map, actions}) => (
    <div>
        <Map map={map} actions={actions}/>
        <hr/>
        <MapControls map={map} actions={actions}/>
    </div>
)

const mapStateToProps = state => ({
    map: state.map,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
