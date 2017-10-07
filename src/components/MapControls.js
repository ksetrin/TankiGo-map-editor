import React, {Component} from 'react';
import _ from 'lodash'

export default class MapControls extends Component {
    render() {
        let selected = null;
        const {indexCol, indexRow} = this.props.map.selected;
        _.forEach(this.props.map.cells, function (item, iRow) {
            _.forEach(item, function (item, iCol) {
                if (indexCol === iCol && indexRow === iRow) {
                    return selected = item;
                }
            });
        });


        const { setSurface } = this.props.actions;
        return (
            <div>
                { selected ? selected.surface : '' } -
                { selected ? selected.id : '' }
                <select onChange={e => setSurface(e.target.value)}>
                <option value="ground">ground</option>
                <option value="wall">wall</option>
                </select>
            </div>
        );
    }
}
