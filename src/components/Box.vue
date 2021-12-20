<template>
    <div
        class="main-box"
        :style="{ width: width + 'px', height: height + 'px' }"
    >
        <Cell
            v-for="item in coordinates"
            :id="item.id"
            :snake="snake"
            :key="item.id"
        />
    </div>
</template>

<script>
import Cell from "./Cell.vue";
import { Snake } from "@/common/snake";

const CELL_SIDE = 20;

export default {
    name: "Box",
    components: {
        Cell,
    },
    props: {
        x: {
            type: Number,
            required: true,
        },
        y: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            width: 20,
            height: 20,
            coordinates: [],
            snake: null,
        };
    },
    created() {
        this.width = CELL_SIDE * this.x;
        this.height = CELL_SIDE * this.y;
    },
    mounted() {
        let snake = new Snake(this.x, this.y);
        this.snake = snake;
        document.onkeydown = (event) => {
            snake.keydown(event);
        };
        this.coordinates = snake.createCoordinates(this.x, this.y);

        setTimeout(() => {
            this.snake.start();
        }, 1000);
    },
};
</script>

<style>
.main-box {
    margin: 100px auto 0;
    border: 1px solid #666;
}
</style>