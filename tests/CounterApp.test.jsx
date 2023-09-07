import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

/**
 * Mejorar las pruebas. Evitamos reutlizar codigo, se veran
 * mas limpios los archivos de test de componentes react.
 */

describe("Pruebas en CounterApp", () => {
  const value = 5;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor incial de 100 en su tag", () => {
    const { getByTestId } = render(<CounterApp value={100} />);

    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
    //   "100"
    // );

    expect(getByTestId("test-counter").innerHTML).toContain("100");
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    // Para disparar un evento usamos fireEvent.
    fireEvent.click(screen.getByText("+1"));
    // En pantalla deberia de haber ahora el valor de contador + 1
    expect(screen.getByText("6")).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("4")).toBeTruthy();
  });

  test("Debe de resetear el contador", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    
    // obtener por el getByText...
    // fireEvent.click(screen.getByText("Reset"));
    
    // obtener por el aria-label. este name se asocia solamente
    // con el aria-label:
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}))
    expect(screen.getByText(value)).toBeTruthy();

  });
});
