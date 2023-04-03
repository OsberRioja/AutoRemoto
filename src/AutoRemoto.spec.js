import Superficie from "./AutoRemoto.js";

describe("AutoRemoto", () => {
    it("cuando el piloto ingrese una cadena vacia se devolvera 0", () => {
        expect(Superficie("")).toEqual(0);
    });
    it("cuando el piloto ingrese una cadena con el tamaño de la superficie se devuelve la misma cadena", () => {
        expect(Superficie("5,5")).toEqual("5,5");
    });
});