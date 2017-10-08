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
                <h6>Select type of field</h6>
                <select onChange={e => setSurface(e.target.value)}>
                    {/*TODO 8.10.2017 : В случае выбора Ground трава будет по умолчанию, разве нет?*/}
                    <option value="ground">ground</option>
                    <option value="wall">wall</option>
                </select>

                <h6>Select type of decoration</h6>
                {/*onChange={e => setDecoration(e.target.value)}*/}
                <select >
                    {/*TODO 8.10.2017 : Могут ли быть на одной клет одновременно куст и дерево?*/}
                    <option value="">nothing</option>
                    <option value="tree">tree</option>
                    <option value="shrub">shrub</option>
                </select>

                {/*TODO 8.10.2017 : Что такое Static ? */}

                {/*TODO 8.10.2017 : Что такое Dynamic ? */}

                <h6>Select respawn team</h6>
                <select >
                    <option value="">nothing</option>
                    <option value="1">team 1</option>
                    <option value="2">team 2</option>
                </select>

                <h6>Select flag team</h6>
                <select >
                    <option value="">nothing</option>
                    <option value="1">team 1</option>
                    <option value="2">team 2</option>
                </select>

                <br/><br/>

                {/*checked={todo.completed}*/}
                <label><input type="checkbox" onChange={() => alert('asd')} /> bonus</label>

                <br/><br/>

                <button type="button" onClick={() => alert('reset')}>reset selected</button>
            </div>
        );
    }
}
