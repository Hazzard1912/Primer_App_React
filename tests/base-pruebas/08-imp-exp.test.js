import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeByID debe retornar un heroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeByID debe retornar undefined si no hay heroe por el id", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeUndefined();
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);

    expect(heroesDC.length).toBe(3);
    expect(heroesDC).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);
    expect(heroesMarvel.length).toBe(2);
  });
});
