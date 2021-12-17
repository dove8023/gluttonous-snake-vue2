import { shallowMount } from "@vue/test-utils";
import Box from "@/components/Box.vue";
import Cell from "@/components/Cell.vue";

const x = 100, y = 50;
const factory = () => {
    const wrapper = shallowMount(Box, {
        propsData: {
            x,
            y
        }
    })

    return wrapper;
}


describe("View Module The Box Component", () => {
    it("test Box component coordinates' item is right.", async () => {
        const wrapper = factory();
        expect(wrapper.vm.coordinates.length).toBe(x * y);
    })

    it("check the coordinate x and y is right.", async () => {
        const wrapper = factory();

        const index = x * 2;
        const targetCoordinate = {
            x: x,
            y: 2
        }

        expect(wrapper.vm.coordinates[index - 1].x).toBe(targetCoordinate.x);
        expect(wrapper.vm.coordinates[index - 1].y).toBe(targetCoordinate.y);
    })

    it("test Box component Cell Component number is right.", async () => {
        const wrapper = factory();

        await wrapper.vm.$nextTick();
        expect(wrapper.findAllComponents(Cell).length).toBe(x * y);
    })
})