import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class MapField extends Component {
    drawLine(line) {
        return line.map((item, index) => {
            return (
                <div onClick={() => this.props.select (item)}
                     className="line-element"
                     key={index}>
                    {item.surface}
                </div>
            )
        });
    }
    showMap() {
        return this.props.map.map((item, index) => {
            return (
                // на сколько правильно так подсовывать индексы в кей?
                // зачем вообще нужны эти кей?
                <div key={index} className="line">
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MapField);