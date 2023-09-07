import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba de 11-async-await", () => {
  test("getImagen debe de retornar un URL de la imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });

  // test("getImagen debe retornar el catch", async () => {
  //   const url = await getImagen();
  //   expect(url).toBe("No se encontro la imagen");
  // });
});
