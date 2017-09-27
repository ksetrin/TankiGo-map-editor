import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MapField extends Component {
    drawLine(line) {
        return line.map((item, index) => {
            return (
                <div className="line-element" key={index}>
                    {item.surface}
                </div>
            )
        });
    }
    showMap() {
        return this.props.map.map((item, index) => {
            return (
                <div className="line">
                    {this.drawLine(item)}
                </div>
            )
        });
    }
    render() {
        return (
            <div className="app">
                {this.showMap()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        map: state.map
    }
}

export default connect(mapStateToProps)(MapField);