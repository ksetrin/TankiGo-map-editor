import React, {Component} from 'react';

import {connect} from 'react-redux';

class MapDetails extends Component {

    render() {
        if (!this.props.cell) {
            return (
                <p>asd</p>
            )
        }
        return (
            <div>
                {this.props.cell.surface}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cell: state.mapCell
    }
}

export default connect(mapStateToProps)(MapDetails);