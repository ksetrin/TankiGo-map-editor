import React, {Component} from 'react';

// TODO 8.10.2017 : Нужна кнопка сохранять карту на сервере или можно сохранть в куках там или локалсторадж. как лучше?
// TODO 8.10.2017 : Загрузка должна востанавливать код откуда? если карт несколько?
// TODO 8.10.2017 : Если у ректа другой принцип рендера, то получается можно оставить возможность задавать количество строк и колонок? Сделать это не кнопками а вводом значений?

export default class Map extends Component {
    drawLine(item, indexRow) {

        const { selectCell } = this.props.actions;
        // TODO 8.10.2017 : Сделать массовое выделение ячеек через зажатый контрол путем клика на ячейки
        // т.е. пока зажат ctrl на онклик будет пополняться массив кликнутых ячеек
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
                // TODO 8.10.2017 : на сколько правильно так подсовывать индексы в кей?
                // TODO 8.10.2017 : зачем вообще нужны эти кей?
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
