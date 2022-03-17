import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";
import Connection from "../../database/Connection";

export default class OrderRepositoryDatabase implements OrderRepository {
  constructor(readonly connection: Connection) {}

  save(order: Order): Promise<void> {
    throw new Error("Method not implemented.");
  }
  count(): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
