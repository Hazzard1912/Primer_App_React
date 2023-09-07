import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
// Como es un componente de React, usamos React Testing-Library

describe("Pruebas en FirstApp", () => {
  // En desarrollo es mejor no hacer la prueba del snapshot

  // test("debe de hacer match con el snapshot", () => {
  //   const title = "Hola, Soy Goku";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("Debe de mostrar el titulo en un h1", () => {
    const title = "Hola, soy Goku!";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    // Para testear es mejor ponerles un testid a las etiquetas,
    // de esta forma las podemos recuperar en una linea.
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy Goku!";
    const subTitle = "Soy un subtitulo";
    const { getByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getByText(subTitle)).toBeTruthy();
  });

  /**
   * Mejorar las pruebas. Evitamos reutlizar codigo, se veran
   * mas limpios los archivos de test de componentes react.
   */
});
