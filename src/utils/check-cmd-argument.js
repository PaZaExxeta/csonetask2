const isArgumentCSV = (cmdArgument) => {
  if (cmdArgument && cmdArgument.match(/[A-Za-z0-9]+\.csv/)) {
    return cmdArgument
  } else {
    console.error('Error: Argument has to be a .csv file!')
    return
  }
}

module.exports = isArgumentCSV;