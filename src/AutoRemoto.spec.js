import Auto, { ValueError } from "./AutoRemoto.js";

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
        expect(Auto("IIIIII")).toEqual("0,0S");
    });
    it("Si el piloto ingresa el comando D gira a la derecha una vez a partir de la posicon 0,0N", () => {
        expect(Auto("D")).toEqual("0,0E");
    });
    it("Si el piloto ingresa mas de un comando D gira a la derecha las veces necesarias a partir de la posicon 0,0N", () => {
        expect(Auto("DDDDDD")).toEqual("0,0S");
    });
});

describe("•	Ingresar una serie de comandos y que se ejecuten en orden tomando en cuenta una posición inicial por defecto (0,0) N y un tamaño de la superficie de 5,5", () => {
    it("deberia combinar los comandos A e I", () => {
        expect(Auto("AIA")).toEqual("0,1O");
    });
    it("deberia combinar los comandos A y D", () => {
        expect(Auto("ADA")).toEqual("1,1E");
    });
    it("deberia combinar los comandos DADA y no salir del limite", () => {
        expect(Auto("DADA")).toEqual("1,0S");
    });
    it("deberia combinar los comandos DADA y no salir del limite", () => {
        expect(Auto("DAAAAA")).toEqual("4,0E");
    });
    it("deberia combinar los comandos DADA y no salir del limite", () => {
        expect(Auto("ADAAIAIAIA")).toEqual("1,1S");
    });
});

describe("Ingresar la Posicion Inicial del Auto", () => {
    it("se debe poder ingresar la posicion inicial para X", () => {
        expect(Auto("0/AIA")).toEqual("Error en los parametros");
    });
    it("se debe poder ingresar la posicion inicial para X y para Y", () => {
        expect(Auto("0,0/ADAI")).toEqual("Error en los parametros");
    });
    it("se debe poder ingresar la posicion inicial para X y para Y y la orientacion inicial (N,S,E,O)", () => {
        expect(Auto("1,2N/ADAI")).toEqual("2,3N");
    });
});
describe("Ingresar un tamaño para la superficie", () => {
    it("se debe poder ingresar el tamaño de la superficie", () => {
        expect(Auto("5,5/1,2N/IAIAIAIAA")).toEqual("1,3N");
    });
    it("se puede ingresar la superficie y los comandos y se inicializara con una posicion por defecto", () => {
        expect(Auto("5,5/ADA")).toEqual("1,1E");
    });
    it("debe devolver error si se pasa una posicion sin orientacion", () => {
        expect(Auto("5,5/1,2/IAIAIAIAA")).toEqual("Error en los parametros");
    });
});

describe("Cuando se ingrese el comando J se avanza dos posiciones", () => {
    it("ingresando el comando J deberia avanzar dos posiciones", () => {
        expect(Auto("5,5/0,0N/J")).toEqual("0,2N");
    });
});


