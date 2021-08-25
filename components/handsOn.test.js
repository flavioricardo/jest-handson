const handsOn = require("./handsOn");

describe("implementação dos testes", () => {
  it("deve retornar o valor somado de um", () => {
    expect(handsOn.somarUm(10)).toBe(11);
  });

  it("deve retornar o valor decrescido de dez", () => {
    expect(handsOn.diminuirDez(10)).toBe(0);
  });

  it("deve retornar valor somado a função de callback", () => {
    const funcaoMock = jest.fn();
    funcaoMock.mockReturnValue(2);
    expect(handsOn.somarComCallback(10, funcaoMock)).toBe(12);
    // Testando se o mock foi chamado da maneira correta
    expect(funcaoMock.mock.calls[0][0]).toBe(10);
  });
});
