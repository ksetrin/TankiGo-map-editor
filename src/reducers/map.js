import _ from 'lodash'

const initialState = {
    selected: {
        indexCol: null,
        indexRow: null,
    },
    cells: [
        [{
            "surface": "wall"
        }, {
            "surface": "ground",
            "grace": "grace"
        }, {
            "surface": "ground",
            "tree": "tree"
        }],
        [{
            "surface": "wall",
            "static": true,  //TODO 8.10.2017 + : Что такое Static ? wall and flag - add static
            "grace": "shrub"
        }, {
            "surface": "ground",
        }, {
            "surface": "ground",
            "respawn": {
                "isset": true,
                "teamId": 1
            }
        }],
        [{
            "surface": "wall",
            // "dynamic": true //TODO 8.10.2017 + : Что такое Dynamic ? выкинуть
        }, {
            "surface": "ground",
            "always": true // это поле Always Bonus
        }, {
            "surface": "ground",
            "flag": {
                "isset": true,
                "teamId": 1
            },
            "static": true //TODO 8.10.2017 + : Что такое Static ? wall and flag - add static
        }]
    ]
};

export default function map(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CELL':
            return {
                ...state,
                selected: action.payload
            };
        case 'SET_SURFACE': {
            let cells = _.clone(state.cells);
            let cell = cells[state.selected.indexRow][state.selected.indexCol];

            cell.surface = action.payload;
            cell.static = action.payload === 'wall' ? true : false
            return {...state, cells: cells};
        }
        case 'SET_DECORATION': {
            let cells = _.clone(state.cells);
            let cell = cells[state.selected.indexRow][state.selected.indexCol];

            if (action.payload === 'grace' || action.payload === 'shrub') {
                cell['grace'] = action.payload;
                delete cell['tree'];
            } else if (action.payload === 'tree' ) {
                cell['tree'] = 'tree';
                delete cell['grace'];
            } else {
                delete cell['grace'];
                delete cell['tree'];
            }
            return {...state, cells: cells};
        }
        case 'SET_RESPAWN': {
            let cells = _.clone(state.cells);
            cells[state.selected.indexRow][state.selected.indexCol]['respawn'] = {"isset":!!action.payload,"teamId":action.payload};
            return {...state, cells: cells};
        }
        case 'SET_FLAG': {
            let cells = _.clone(state.cells);
            let cell = cells[state.selected.indexRow][state.selected.indexCol];
            cell.flag = {"isset":!!action.payload,"teamId":action.payload};
            cell.static = !!action.payload;
            return {...state, cells: cells};
        }
        case 'SET_BONUS': {
            let cells = _.clone(state.cells);
            let cell = cells[state.selected.indexRow][state.selected.indexCol];
            cell['always'] = !(cell.hasOwnProperty('always') && cell['always']);
            return {...state, cells: cells};
        }
        default:
            return state
    }
}
