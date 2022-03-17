import CouponRepository from "../../../../domain/repository/CouponRepository";
import IRepositoryFactory from "../../../../domain/repository/IRepositoryFactory";
import ItemRepository from "../../../../domain/repository/ItemRepository";
import OrderRepository from "../../../../domain/repository/OrderRepository";
import Connection from "../../../database/Connection";
import CouponRepositoryDatabase from "../CouponRepositoryDatabase";
import ItemRepositoryDatabase from "../ItemRepositoryDatabase";
import OrderRepositoryDatabase from "../OrderRepositoryDatabase";

export default class DatabaseRepositoryFactory implements IRepositoryFactory {
  constructor(readonly connection: Connection) {}

  createItemRepository(): ItemRepository {
    return new ItemRepositoryDatabase(this.connection);
  }
  createOrderRepository(): OrderRepository {
    return new OrderRepositoryDatabase(this.connection);
  }
  createCouponRepository(): CouponRepository {
    return new CouponRepositoryDatabase(this.connection);
  }
}
