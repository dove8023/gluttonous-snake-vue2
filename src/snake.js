// export interface Coordinate {
//     x: number;
//     y: number;
//     id: number;
// }

/**
 * @description create the list by the xlen, ylen.
 * @param {number} xlen 
 * @param {number} ylen 
 */
export function createCoordinates(xlen, ylen) {
    const coordinates = [];
    for (let y = 1; y <= ylen; y++) {
        for (let x = 1; x <= xlen; x++) {
            coordinates.push({
                x,
                y,
                id: x + '-' + y,
            });
        }
    }

    return coordinates;
}


export class Snake {

    constructor(x, y) {
        this.maxX = x;
        this.maxY = y;
    }

    createSnake() {
        this.snakeBody = [];

        let head = {
            x: Math.ceil(this.maxX / 2),
            y: Math.ceil(this.maxY / 2)
        };

        head.id = head.x + '-' + head.y;

        let { x, y } = head;

        this.snakeBody.push(head);
        this.snakeBody.push({
            y,
            x: x - 1,
            id: x - 1 + '-' + y
        }, {
            y,
            x: x - 2,
            id: x - 2 + '-' + y
        }, {
            y,
            x: x - 3,
            id: x - 3 + '-' + y
        });

        return this.snakeBody;
    }
}