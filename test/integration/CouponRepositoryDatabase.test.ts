import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";

let connection: Connection;

beforeEach(() => {
  connection = new PostgreSQLConnectionAdapter();
});

test("Deve testar o repositorio de cupom", async () => {
  const couponRepository = new CouponRepositoryDatabase(connection);
  const coupon = await couponRepository.getByCode("VALE20");
  expect(coupon?.percentage).toBe(20);
});

afterEach(async () => {
  await connection.close();
});
