import { render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";
import userEvent from "@testing-library/user-event";


describe("Teste calculadora", () => {
    // test("1 - Deve renderizada com os dígitos de operações +, -, *, e /", () => {
    //     render(<Calculator />);
    //     const sum = screen.getByText("+");
    //     const subtract = screen.getByText("-");
    //     const multiply = screen.getByText("*");
    //     const divide = screen.getByText("/");
    //     expect(sum).toBeInTheDocument();
    //     expect(subtract).toBeInTheDocument();
    //     expect(multiply).toBeInTheDocument();
    //     expect(divide).toBeInTheDocument();
    //   });

      test("1.1 - Deve renderizada com os dígitos de operações +, -, *, e /", () => {
        render(<Calculator />);
        //buscar as funcionalidades
        const operadores = ["+", "-", "*", "/", "."]
        for(const operador of operadores){
            const botao = screen.getByText(operador)
            expect(botao).toBeInTheDocument()
        }
      });
    
    test("2 - Deve mostrar se a multiplicação está funcionando corretamente", async () => {
        const user = userEvent.setup();

        render(<Calculator />);

        const multiply = screen.getByText("*");
        const five = screen.getByText("5");
        const two = screen.getByText("2");
        const equal = screen.getByText("=");
        const re = screen.getByText("C");

        await user.click(five);
        await user.click(multiply);
        await user.click(two);
        await user.click(equal);
        const result = screen.getByText("10");
        expect(result).toBeInTheDocument();

        await user.click(re)

        await user.click(two);
        await user.click(five);
        await user.click(multiply);
        await user.click(two);
        await user.click(equal);
        const result1 = screen.getByText("50")

        expect(result1).toBeInTheDocument();
    });

    test("3 - Deve concatenar operações está funcionando corretamente", async () => {
        const user = userEvent.setup();

        render(<Calculator />);

        const multiply = screen.getByText("*");
        const sum = screen.getByText("+");
        const five = screen.getByText("5");
        const two = screen.getByText("2");
        const equal = screen.getByText("=");
        const re = screen.getByText("C");

        await user.click(five);
        await user.click(multiply);
        await user.click(two);
        await user.click(sum);
        await user.click(five);
        await user.click(equal);
        const result = screen.getByText("15");
        expect(result).toBeInTheDocument();

        await user.click(re)

        await user.click(two);
        await user.click(five);
        await user.click(multiply);
        await user.click(two);
        await user.click(sum);
        await user.click(two);
        await user.click(equal);
        const result1 = screen.getByText("52")

        expect(result1).toBeInTheDocument();
    });

});