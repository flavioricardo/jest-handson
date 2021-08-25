const myCode = require("./myCode");

describe("testes", () => {
  it("deve retornar a soma de dois valores", () => {
    expect(myCode.sum(10, 10)).toBe(20);
  });

  it("deve chamar a função de callback", () => {
    const mockFn = jest.fn();
    mockFn(10);
    mockFn.mockReturnValue(10);

    expect(mockFn).toHaveBeenCalled();
    expect(myCode.callBackFn(10, mockFn)).toBe(20);
  });
});
