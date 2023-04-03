import Superficie from "./AutoRemoto.js";

describe("AutoRemoto", () => {
    it("cuando el piloto ingrese una cadena vacia se devolvera 0", () => {
        expect(Superficie("")).toEqual(0);
        });
});