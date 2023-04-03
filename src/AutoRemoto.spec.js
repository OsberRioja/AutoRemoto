import Auto from "./AutoRemoto.js";

describe("Avanzar una posicion con el comando A desde una posicion inicial por defecto (0,0)N y una tamaño de supericie por defecto (5,5)", () => {
    it("Si el piloto no ingresa una cadena vacia se devuelve la posicion inicial sin cabios", () => {
        expect(Auto("")).toEqual("0,0N");
    });
});