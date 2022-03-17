import CouponRepository from "../../../../domain/repository/CouponRepository";
import IRepositoryFactory from "../../../../domain/repository/IRepositoryFactory";
import ItemRepository from "../../../../domain/repository/ItemRepository";
import OrderRepository from "../../../../domain/repository/OrderRepository";
import CouponRepositoryMemory from "../CouponRepositoryMemory";
import ItemRepositoryMemory from "../ItemRepositoryMemory";
import OrderRepositoryMemory from "../OrderRepositoryMemory";

export default class MemoryRepositoryFactory implements IRepositoryFactory {
  createItemRepository(): ItemRepository {
    return new ItemRepositoryMemory();
  }
  createOrderRepository(): OrderRepository {
    return new OrderRepositoryMemory();
  }
  createCouponRepository(): CouponRepository {
    return new CouponRepositoryMemory();
  }
}
