import { Snake } from "@/common/snake";


describe("Test Snake Class", () => {
    it("test the snake create method", () => {
        const x = 50;
        const y = 30;
        const snake = new Snake(x, y);

        const snakeBody = snake.createSnake();

        expect(snakeBody.length).toBe(4);

        let yDir = snakeBody[0].y;
        let yIsSame = true;
        for (let item of snakeBody) {
            if (item.y != yDir) {
                yIsSame = false;
                break;
            }
        }

        expect(yIsSame).toBe(true);
    });

})