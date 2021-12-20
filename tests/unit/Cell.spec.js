import { shallowMount } from "@vue/test-utils";
import Cell from "@/components/Cell.vue";

const factory = (type) => {
    const wrapper = shallowMount(Cell, {
        propsData: {
            type
        }
    })

    return wrapper;
}


describe("View Module The Cell Component", () => {
    it("test Cell component type prop.", async () => {
        const wrapper = factory("head");
        expect(wrapper.find(".head").exists()).toBe(true);
    })

    it("test Cell component type prop. Default is blank", async () => {
        const wrapper = factory();
        expect(wrapper.find(".blank").exists()).toBe(true);
    })

})