import Event from "@/common/event";

describe("Event Module Test", () => {

    const eventStore = new Event();

    it("test event.on API must be a function", () => {
        expect(() => {
            eventStore.on("ok", "good");
        }).toThrowError("must be a function")
    })

    it("test event.emit has been called correctly.", () => {
        let isOk = false;
        eventStore.on("ok", () => {
            isOk = true;
        });

        eventStore.emit("ok");

        expect(isOk).toBe(true);
    })

    it("test event.emit's args set correctly.", () => {
        let name = "Alice";
        let resStr = "";
        eventStore.on("ok", (str) => {
            resStr = str;
        });

        eventStore.emit("ok", name);

        expect(resStr).toBe(name);
    })
})