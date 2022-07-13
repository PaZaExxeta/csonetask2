function buildPages(tableRows) {
  const headline = tableRows.shift()
  let divider = tableRows.shift()
  const pages = []
  let page = []
  let counter = 0
  while (counter <= 9 && tableRows.length > 0) {
    page.push(tableRows.shift());
    if (counter === 9) {
      counter = 0;
      pages.push(page)
      page = []
    } else if (page.length < 10 && tableRows.length === 0) {
      pages.push(page);
    } else {
      counter++;
    }
  }

  pages.forEach((page) => {
    page.unshift(divider)
    page.unshift(headline)
  })

  return pages

}

module.exports = buildPages;