import { shallowMount } from "@vue/test-utils";
import Cell from "@/components/Cell.vue";
import { Snake } from "@/common/snake";

const id = "4-4"
const factory = () => {
    let snake = new Snake(30, 30);
    const wrapper = shallowMount(Cell, {
        propsData: {
            id,
            snake
        }
    })

    return wrapper;
}


describe("View Module The Cell Component", () => {
    it("test Cell component on emit change", async () => {
        const wrapper = factory();
        wrapper.vm.snake.emit("update", [{
            id,
            x: 4,
            y: 4,
            type: "head"
        }])

        await wrapper.vm.$nextTick();

        expect(wrapper.find(".head").exists()).toBe(true);
    });

    it("test Cell component on emit change 2", async () => {
        const wrapper = factory();
        wrapper.vm.snake.emit("update", [{
            id,
            x: 4,
            y: 4,
            type: "body"
        }])

        await wrapper.vm.$nextTick();

        expect(wrapper.find(".body").exists()).toBe(true);
    });
})