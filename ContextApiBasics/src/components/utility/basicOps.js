export function basicOps(products, searchTerm, sortDirection) {
  if (products === null) {
    console.log('empty products');
    return null;
  }
  let filteredArr = products;
  if (searchTerm != '') {
    filteredArr = filteredArr.filter((product) => {
      let searchKey = searchTerm.toLowerCase();
      let prodTitle = product.title.toLowerCase();
      return prodTitle.includes(searchKey);
    });
  }

  let filteredAndSortedArr = filteredArr;
  if (sortDirection !== 0) {
    if (sortDirection > 0)
      filteredAndSortedArr.sort((p1, p2) => p1.price - p2.price);
    else filteredAndSortedArr.sort((p1, p2) => p2.price - p1.price);
  }

  //   console.log(filteredAndSortedArr);
  return filteredAndSortedArr;
}
