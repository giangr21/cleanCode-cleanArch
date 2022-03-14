import Item from "../../domain/entity/Item";

export default interface ItemRepository {
  getById(idItem: number): Promise<Item | undefined>;
}
