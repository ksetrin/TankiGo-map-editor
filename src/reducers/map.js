const initialState = {
    selected: {
        indexCol: null,
        indexRow: null,
    },
    cells: [
        [{
            id: 1, // TODO 8.10.2017 : УБРАТЬ ID
            "surface": "wall"
        }, {
            id: 2,
            "surface": "ground",
            "grace": "grace"
        }, {
            id: 3,
            "surface": "ground",
            "tree": "tree"
        }],
        [{
            id: 4,
            "surface": "wall",
            "grace": "shrub"
        }, {
            id: 5,
            "surface": "ground",
            "static": true
        }, {
            id: 6,
            "surface": "ground",
            "respawn": {
                "isset": true,
                "teamId": 0
            }
        }],
        [{
            id: 7,
            "surface": "wall",
            "dynamic": true
        }, {
            id: 8,
            "surface": "ground",
            "always": true
        }, {
            id: 9,
            "surface": "ground",
            "flag": {
                "isset": true,
                "teamId": 0
            }
        }]
    ]
};

//TODO 8.10.2017 : КАК Определяется количество команд? Сколько макс?


export default function map(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CELL':
            return {
                ...state,
                selected: action.cell
            };
        case 'SET_SURFACE':
            let cells = state.cells;

            // TODO 8.10.2017 : Как-то можно вынести это в  функцию-хелпер? код будет часто повторяться
            for (let ri = 0; ri < cells.length; ri++) {
                for (let ci = 0; ci < cells[ri].length; ci++) {
                    if (ri === state.selected.indexRow && ci === state.selected.indexCol) {
                        cells[ri][ci].surface = action.payload;
                    }
                }
            }
            return {...state, cells: cells};

        default:
            return state
    }
}
