import SimulateFreight from "../../src/application/useCase/simulate-freight/SimulateFreight";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";

test("Deve simular o frete de um pedido", () => {
  const itemRepository = new ItemRepositoryMemory();
  const simulateFreight = new SimulateFreight(itemRepository);

  const input = {
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
  };
  const output = simulateFreight.execute(input);
});
