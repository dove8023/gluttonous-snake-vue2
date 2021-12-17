<template>
    <div
        class="main-box"
        :style="{ width: width + 'px', height: height + 'px' }"
    >
        <Cell
            v-for="item in coordinates"
            :x="item.x"
            :y="item.y"
            :key="item.id"
        />
    </div>
</template>

<script>
import Cell from "./Cell.vue";

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

        let xlen = this.x;
        let ylen = this.y;
        let id = 0;
        for (let y = 1; y <= ylen; y++) {
            for (let x = 1; x <= xlen; x++) {
                this.coordinates.push({
                    x,
                    y,
                    id: id++,
                });
            }
        }
    },
};
</script>

<style>
.main-box {
    margin: 100px auto;
    border: 1px solid #666;
}
</style>