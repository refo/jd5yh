// TODO: revise for optimisation
export default function filterDeep(
  arr = [],
  value = "",
  filterKey = "ID",
  childrenKey = "childItems"
) {
  return arr.reduce((acc, curr) => {
    if (curr[filterKey] === value) {
      return acc;
    }

    let childItems =
      curr[childrenKey] && curr[childrenKey].length
        ? curr[childrenKey]
        : undefined;

    if (childItems) {
      return [
        ...acc,
        {
          ...curr,
          [childrenKey]: filterDeep(childItems, value, filterKey, childrenKey)
        }
      ];
    }

    return [...acc, { ...curr }];
  }, []);
}
