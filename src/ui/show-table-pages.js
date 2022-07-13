const prompt = require('prompt-sync')();

function showTablePages(tablePages) {
  console.log('\n')
  tablePages[0].forEach((table) => {
    console.log(table)
  })
  let currentPage = 0
  if (tablePages.length > 1) {
    console.log('\n' + (currentPage + 1) + '/' + tablePages.length)
    const input = prompt('Next Page? n -> next | p -> previous')
    switch (input) {
      case 'n':
        tablePages[currentPage + 1].forEach((table) => {
          console.log(table)
        })
        currentPage += 1
        console.log('\n' + (currentPage + 1) + '/' + tablePages.length)
        break;
      case 'p':
        tablePages[currentPage - 1].forEach((table) => {
          console.log(table)
        })
        currentPage -= 1
        console.log('\n' + (currentPage + 1) + '/' + tablePages.length)
        break;
    }
  }


}

module.exports = showTablePages