import ValidateCoupon from "../../application/usecase/validate-coupon/ValidateCoupon";
import ValidateCouponOutput from "../../application/usecase/validate-coupon/ValidateCouponOutput";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";

export default class CouponsController {
  constructor(readonly repositoryFactory: RepositoryFactory) {}

  async validateCoupon(code: string): Promise<ValidateCouponOutput> {
    const validateCoupon = new ValidateCoupon(
      this.repositoryFactory.createCouponRepository()
    );
    const output = await validateCoupon.execute(code);
    return output;
  }
}
