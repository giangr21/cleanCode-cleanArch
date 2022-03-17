import CouponRepository from "./CouponRepository";
import ItemRepository from "./ItemRepository";
import OrderRepository from "./OrderRepository";

export default interface IRepositoryFactory {
  createItemRepository(): ItemRepository;
  createOrderRepository(): OrderRepository;
  createCouponRepository(): CouponRepository;
}
