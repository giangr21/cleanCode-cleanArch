import GetItemOutput from "./GetItemOutput";

// Output Bundary
export default interface GetItemsQueryPresenter {
  present(getItemsOutput: GetItemOutput[]): void;
}
