import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroesByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroesByIdAsync debe obtener un error si heroe se encuentra", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe " + id);
      done();
    });
  });
});
