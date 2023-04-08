import Auto from "./AutoRemoto.js";

describe("Avanzar una posicion con el comando A desde una posicion inicial por defecto (0,0)N y una tamaño de supericie por defecto (5,5)", () => {
    it("Si el piloto no ingresa una cadena vacia se devuelve la posicion inicial sin cabios", () => {
        expect(Auto("")).toEqual("0,0N");
    });
    it("Cuando se ingrese el comando A se avanzara 1 piscion sobre la posicion inicial por defecto", () => {
        expect(Auto("A")).toEqual("0,1N");
    });
    it("Si se ingresan el comando AA se avanzaran 2 posiciones a partir de la posicion incial 0,0N", () => {
        expect(Auto("AA")).toEqual("0,2N");
    });
    it("Si se ingresa una secuencia de comandos A se avanzaran las posiciones necesarias.", () => {
        expect(Auto("AAAA")).toEqual("0,4N");
    });
    it("Si se ingresa una secuencia que sobre pase los limites el auto debe detenerse en el limite", () => {
        expect(Auto("AAAAAA")).toEqual("0,4N");
    });
});

describe("Girar a la Izquierda o a la Derecha el auto con los comandos I o D", () => {
    it("Si el piloto ingresa el comando I la posicion final del auto se mueve una vez a la izquierda", () => {
        expect(Auto("I")).toEqual("0,0O");
    });
    it("Si el piloto ingresa el comando mas de un comando I gira a la izquierda las veces necesarias veces a partir de la posicon 0,0N", () => {
        expect(Auto("III")).toEqual("0,0E");
    });
});