export default function () {
    return [
        [{
            id: 1,
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
            "surface": "ground",
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
            "surface": "ground",
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
}