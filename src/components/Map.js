import React, {Component} from 'react';

export default class Map extends Component {
    drawLine(item, indexRow) {

        const { selectCell } = this.props.actions;
        return item.map((item, indexCol) => {
            return (
                <div onClick={() => selectCell({indexRow, indexCol})}
                     className="line-element"
                     key={indexCol}>
                    {item.surface} - {item.id}
                </div>
            )
        });
    }
    showMap() {
        return this.props.map.cells.map((item, indexRow) => {
            return (
                // на сколько правильно так подсовывать индексы в кей?
                // зачем вообще нужны эти кей?
                <div key={indexRow} className="line">
                    {this.drawLine(item, indexRow)}
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
