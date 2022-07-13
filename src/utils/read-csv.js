const fs = require("fs"), rl = require("readline");

function readCsv(csvFileName = 'data.csv') {
  let data = [];
  return new Promise((resolve) => {
    const reader =  rl.createInterface({
      input: fs.createReadStream(csvFileName)
    })
    reader.on("line", async (row) => {
      data.push(row);
    });
    reader.on("close", async () => {
      resolve(data)
    });
  })
}

module.exports = readCsv;