import Connection from "../../../infra/database/Connection";
import GetItemOutput from "./GetItemOutput";
import GetItemsQueryPresenter from "./GetItemsQueryPresenter";

export default class GetItemsQuery {
  constructor(
    readonly connection: Connection,
    readonly presenter: GetItemsQueryPresenter
  ) {}

  async execute(): Promise<void> {
    const getItemsOutput: GetItemOutput[] = [];

    const itemsData = await this.connection.query(
      "select * from ccca.item",
      []
    );
    for (const itemData of itemsData) {
      getItemsOutput.push(
        new GetItemOutput(
          itemData.id_item,
          itemData.description,
          parseFloat(itemData.price)
        )
      );
    }

    this.presenter.present(getItemsOutput);
  }
}
