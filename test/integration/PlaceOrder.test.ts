import PlaceOrder from "../../src/application/useCase/place-order/PlaceOrder";
import CouponRepository from "../../src/domain/repository/CouponRepository";
import ItemRepository from "../../src/domain/repository/ItemRepository";
import OrderRepository from "../../src/domain/repository/OrderRepository";
import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";

let itemRepository: ItemRepository;
let orderRepository: OrderRepository;
let couponRepository: CouponRepository;
let connection: Connection;

beforeEach(() => {
  connection = new PostgreSQLConnectionAdapter();
  itemRepository = new ItemRepositoryDatabase(connection);
  orderRepository = new OrderRepositoryMemory();
  couponRepository = new CouponRepositoryMemory();
});

test("Deve fazer um pedido", async () => {
  const placeOrder = new PlaceOrder(
    itemRepository,
    orderRepository,
    couponRepository
  );

  const input = {
    cpf: "935.411.347-80",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    coupon: "VALE20",
    issueDate: new Date("2021-03-01T10:00:00"),
  };

  const output = await placeOrder.execute(input);
  expect(output.total).toBe(4872);
});

test("Deve fazer um pedido calculando o codigo", async () => {
  const placeOrder = new PlaceOrder(
    itemRepository,
    orderRepository,
    couponRepository
  );

  const input = {
    cpf: "935.411.347-80",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    coupon: "VALE20",
    issueDate: new Date("2021-03-01T10:00:00"),
  };

  await placeOrder.execute(input);
  const output = await placeOrder.execute(input);
  expect(output.code).toBe("202100000002");
});

afterEach(async () => {
  await connection.close();
});
