const isArgumentCSV = require('./src/utils/check-cmd-argument');
const buildPages = require("./src/utils/build-pages");
const readCsv = require("./src/utils/read-csv");
const csvToTable = require('./src/utils/csv-to-table')
const menu = require('./src/ui/menu')

const args = process.argv.slice(2)
const firstArg = args[0]

const csvFileName = isArgumentCSV(firstArg);

readCsv(csvFileName).then((result) => {
  const tableRows = csvToTable(result)
  const tablePages = buildPages(tableRows)
  menu(tablePages)
});








