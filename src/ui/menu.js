const prompt = require('prompt-sync')();
const showTablePages = require('./show-table-pages')

function menu(tablePages) {
  console.log('Welcome to the CSV Viewer!\n')
  const answerInput = prompt('Would you like to see you CSV Table? y/n')
  switch (answerInput) {
    case 'n':
      console.log('Ok bye!')
      break;
    case 'y':
      showTablePages(tablePages)
      break
    default:
      console.log('You have to enter y or n\n')
      menu(tablePages)
      break
  }

}

module.exports = menu