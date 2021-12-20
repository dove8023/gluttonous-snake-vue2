<template>
    <div
        class="main-box"
        :style="{ width: width + 'px', height: height + 'px' }"
    >
        <Cell
            v-for="item in coordinates"
            :id="item.id"
            :type="item.type"
            :key="item.id"
        />
    </div>
</template>

<script>
import Cell from "./Cell.vue";
import { createCoordinates } from "../snake";

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
        };
    },
    created() {
        this.width = CELL_SIDE * this.x;
        this.height = CELL_SIDE * this.y;

        this.coordinates = createCoordinates(this.x, this.y);
    },
};
</script>

<style>
.main-box {
    margin: 100px auto;
    border: 1px solid #666;
}
</style>