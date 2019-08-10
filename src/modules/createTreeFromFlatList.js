// TODO: revise for optimisation
export default function createTreeFromFlatList(
  arr = [],
  idKey = "ID",
  parentKey = "parentID",
  childrenKey = "childItems"
) {
  const byId = {};

  const tree = arr

    // First pass:
    // Collect references by IDs
    .map(item => {
      item = Object.assign({}, item, { [childrenKey]: [] });
      const itemID = item[idKey];
      byId[itemID] = item;

      return item;
    })

    // Second pass:
    // Rejoin children with their parents
    .map(item => {
      const parentID = item[parentKey];

      if (!parentID) {
        return item;
      }

      const parent = byId[parentID];
      parent[childrenKey].push(item);
      return undefined;
    })

    // Remove undefined nodes (these are children of other nodes)
    .filter(_ => _);

  return tree;
}
