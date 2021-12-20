<template>
    <div class="cell-item">
        <div class="content" :class="type"></div>
    </div>
</template>

<script>
export default {
    name: "Cell",
    props: {
        type: {
            required: false,
            type: String,
            default: "blank",
        },
    },
};
</script>

<style>
.cell-item {
    float: left;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
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