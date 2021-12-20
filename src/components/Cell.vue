<template>
    <div class="cell-item">
        <div class="content" :class="type"></div>
    </div>
</template>

<script>
export default {
    name: "Cell",
    props: {
        id: {
            required: true,
            type: String,
        },
        snake: {
            required: true,
            type: Object,
        },
    },
    data() {
        return {
            type: "blank",
        };
    },
    mounted() {
        this.snake.on("update", (list) => {
            for (let item of list) {
                if (item.id == this.id) {
                    this.type = item.type.toLowerCase();
                    return;
                }
            }

            this.type = "blank";
        });
    },
};
</script>

<style>
.cell-item {
    float: left;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    width: 15px;
    height: 15px;
    border-radius: 100%;
}

.head {
    background: #666;
}

.body {
    background: #d3d3d3;
}

.food {
    background: orange;
}
</style>