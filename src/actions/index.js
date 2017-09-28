export const select = (cell) => {
    console.log('asd', cell.surface);
    return {
        type: "CAR_SELECTED",
        payload: cell
    }
};