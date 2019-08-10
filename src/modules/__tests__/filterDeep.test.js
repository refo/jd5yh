import filterDeep from "../filterDeep";

import mockTree from "../__mocks__/tree.mock";

describe("filterDeep", () => {
  it("should filter out item with the provided value from tree", () => {
    const result = filterDeep(mockTree, 54);
    const expectedResult = [
      {
        ID: 2,
        Phone: "(979) 486-1932",
        City: "Chełm",
        Name: "Scarlet",
        childItems: [
          {
            ID: 30,
            parentID: 2,
            Phone: "(641) 756-7073",
            City: "Harrison Hot Springs",
            Name: "Hamilton",
            childItems: []
          },
          {
            ID: 40,
            parentID: 2,
            Phone: "(921) 336-7339",
            City: "Namur",
            Name: "Lionel",
            childItems: []
          }
        ]
      }
    ];
    expect(result).toEqual(expectedResult);
  });

  it("should filter out item with the provided value from tree", () => {
    const result = filterDeep(mockTree, 30);
    const expectedResult = [
      {
        ID: 2,
        Phone: "(979) 486-1932",
        City: "Chełm",
        Name: "Scarlet",
        childItems: [
          {
            ID: 40,
            parentID: 2,
            Phone: "(921) 336-7339",
            City: "Namur",
            Name: "Lionel",
            childItems: []
          }
        ]
      }
    ];
    expect(result).toEqual(expectedResult);
  });
});
