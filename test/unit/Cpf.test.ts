import Cpf from "../../src/domain/entity/Cpf";

test("Deve testar um cpf valido", () => {
  const cpf = new Cpf("935-411-347-80");
  expect(cpf.getValue()).toBe("935-411-347-80");
});

test("Deve testar um cpf invalid com digitos diferentes", () => {
  expect(() => new Cpf("123-456-212-80")).toThrow(new Error("CPF Inválido"));
});

const invalidCpfWithSameDigits = ["111.111.111-11", "222.222.222-22"];

describe.each(invalidCpfWithSameDigits)(
  "Deve testar um cpf invalido com os digitos atuais",
  (cpf) => {
    test(`${cpf}`, () => {
      expect(() => new Cpf(cpf)).toThrow(new Error("CPF Inválido"));
    });
  }
);
