import ValidateCoupon from "../../src/application/useCase/validate-coupon/ValidateCoupon";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";

test("Deve validar um cupom de desconto", async () => {
  const couponRepository = new CouponRepositoryMemory();
  const validateCoupon = new ValidateCoupon(couponRepository);
  const isValid = await validateCoupon.execute("VALE20");
  expect(isValid).toBeTruthy;
});
