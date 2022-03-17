import Order from "../../../domain/entity/Order";
import CouponRepository from "../../../domain/repository/CouponRepository";
import IRepositoryFactory from "../../../domain/repository/IRepositoryFactory";
import ItemRepository from "../../../domain/repository/ItemRepository";
import OrderRepository from "../../../domain/repository/OrderRepository";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder {
  itemRepository: ItemRepository;
  orderRepository: OrderRepository;
  couponRepository: CouponRepository;

  constructor(readonly repositoryFactory: IRepositoryFactory) {
    this.itemRepository = repositoryFactory.createItemRepository();
    this.orderRepository = repositoryFactory.createOrderRepository();
    this.couponRepository = repositoryFactory.createCouponRepository();
  }

  async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const sequence = (await this.orderRepository.count()) + 1;
    const order = new Order(input.cpf, input.issueDate, sequence);

    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.getById(orderItem.idItem);
      if (!item) throw new Error("Item not found");
      order.addItem(item, orderItem.quantity);
    }

    if (input.coupon) {
      const coupon = await this.couponRepository.getByCode(input.coupon);
      if (coupon) order.addCoupon(coupon);
    }

    const total = order.getTotal();
    this.orderRepository.save(order);
    const output = new PlaceOrderOutput(total, order.code.value);
    return output;
  }
}
