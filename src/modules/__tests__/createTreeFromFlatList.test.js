import createTreeFromFlatList from "../createTreeFromFlatList";

import mockDataset from "../__mocks__/dataset.mock";
import mockTree from "../__mocks__/tree.mock";

describe("createTreeFromFlatList", () => {
  it("should create a valid tree from tree list", () => {
    const result = createTreeFromFlatList(mockDataset);
    expect(result).toEqual(mockTree);
  });
});
