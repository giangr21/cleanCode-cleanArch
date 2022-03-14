import OrderCode from "../../src/domain/entity/OrderCode";

test("Deve criar o codigo do pedido", () => {
  const date = new Date("2021-03-01T10:00:00");
  const sequence = 1;
  const orderCode = new OrderCode(date, sequence);
  const code = orderCode.value;
  expect(code).toBe("202100000001");
});
