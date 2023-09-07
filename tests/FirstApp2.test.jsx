import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

/**
 * Mejorar las pruebas. Evitamos reutlizar codigo, se veran
 * mas limpios los archivos de test de componentes react.
 */

describe("Pruebas en FirstApp", () => {
  const title = "Hola, soy Goku";
  const subTitle = "Soy un subtitulo";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola, soy Goku', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();

    /**
     * cuando llamamos el screen nos da un DOM virtual actualizado
     * con los ultimos cambios hechos en este codigo. Al llamarlo
     * despues de hacer el render nos da todo lo que hemos pedido
     * renderizar con sus etiquetas, etc.
     */
  });

  test("Debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getByText(subTitle).innerHTML).toContain(subTitle);
  });
});
