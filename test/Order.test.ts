import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order';

test('Nao Deve criar um pedido com CPF invalido', () => {
  expect(() => new Order('111.111.111-11')).toThrow(new Error('CPF Inválido'));
});

test('Deve criar um pedido com 3 itens', () => {
  const order = new Order('935.411.347-80');
  order.addItem(new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000), 1);
  order.addItem(new Item(2, 'Instrumentos Musicais', 'Amplificador', 5000), 1);
  order.addItem(new Item(3, 'Instrumentos Musicais', 'Cabo', 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test('Deve criar um pedido com 3 itens com cupom de desconto', () => {
  const order = new Order('935.411.347-80');
  order.addItem(new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000), 1);
  order.addItem(new Item(2, 'Instrumentos Musicais', 'Amplificador', 5000), 1);
  order.addItem(new Item(3, 'Instrumentos Musicais', 'Cabo', 30), 3);

  const coupom = new Coupon('VALE20', 20);
  order.addCoupon(coupom);

  const total = order.getTotal();
  expect(total).toBe(4872);
});
