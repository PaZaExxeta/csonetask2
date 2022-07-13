const csvToTable = (csvLines) => {

  let columnWidths = []
  let splitLines = []
  let strArr = []
  let table= []

  for (let i = 0; i < csvLines.length; i++) {

    const splitLine = csvLines[i].split(";");
    splitLines.push(splitLine);

    for (let j = 0; j < splitLine.length; j++) {
      if (i === 0) {
        columnWidths.push(splitLine[j].length);
      } else {
        if (splitLine[j].length > columnWidths[j]) {
          columnWidths[j] = splitLine[j].length;
        }
      }
    }
  }

  splitLines.forEach((splitLine) => {
    for (let j = 0; j < splitLine.length; j++) {
      const diffLength = columnWidths[j] - splitLine[j].length
      splitLine[j] = splitLine[j] + ' '.repeat(diffLength);
    }
    strArr.push(splitLine);
  })

  strArr.splice(1, 0, ["-".repeat(columnWidths[0]), "-".repeat(columnWidths[1]), "-".repeat(columnWidths[2]), "-".repeat(columnWidths[3])])

  strArr.forEach((arr) => {
    const rowString = arr.join('|') + "|"
    table.push(rowString)
  })

  return table
}

module.exports = csvToTable;