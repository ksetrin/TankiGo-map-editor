import React, {Component} from 'react';

export default class MapControls extends Component {
    dumpMapToConsole () {
        console.log(JSON.stringify(this.props.map.cells));
    }
    render() {
        let selected = null;
        if (this.props.map.selected.indexCol !== null && this.props.map.selected.indexRow !== null) {
            selected = this.props.map.cells[this.props.map.selected.indexRow][this.props.map.selected.indexCol];
        }
        const actions = this.props.actions;
        return (
            <div>
                {/*{ selected ? selected.id : '' }*/}
                <h6>Select type of field</h6>
                <select onChange={e => actions.setSurface(e.target.value)}>
                    <option value="ground">ground</option>
                    <option value="wall">wall</option>
                </select>

                <h6>Select type of decoration</h6>
                <select onChange={e => actions.setDecoration(e.target.value)}>
                    <option value="">none</option>
                    <option value="grace">grace</option>
                    <option value="tree">tree</option>
                    <option value="shrub">shrub</option>
                </select>

                <h6>Select respawn team</h6>
                <select onChange={e => actions.setRespawn(e.target.value)}>
                    <option value="">none</option>
                    <option value="1">team 1</option>
                    <option value="2">team 2</option>
                </select>

                <h6>Select flag team</h6>
                <select onChange={e => actions.setFlag(e.target.value)}>
                    <option value="">none</option>
                    <option value="1">team 1</option>
                    <option value="2">team 2</option>
                </select>

                <br/><br/>

                {/*checked={todo.completed}*/}
                <label><input type="checkbox" onChange={e => actions.setBonus(e.target.value)} />bonus</label>

                <br/><br/>

                <button type="button" onClick={() => actions.selectCell({indexRow: null, indexCol: null})}>reset selected</button>
                <br/><br/>
                <button type="button" onClick={() => this.dumpMapToConsole()}>get dump</button>
            </div>
        );
    }
}
