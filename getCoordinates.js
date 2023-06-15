const fs = require('fs');
const path = require('path');

const getCoordinates = () => {
  // Read the contents of the text file
  const data = fs.readFileSync(
    './batch/003b5b458a552c47956a813fe475cc93.txt',
    'utf8'
  );

  // Split the data by newline character to get each line
  const lines = data.split('\n');

  // Create an empty array to store the parsed values
  const dataArray = [];

  // Iterate over each line
  for (const element of lines) {
    const line = element.trim();

    // Skip empty lines
    if (line === '') {
      continue;
    }

    // Split the line by space character
    const values = line.split(' ');

    // Convert the values to numbers and store them in an array
    const numbers = values.map(Number);

    if (numbers[0] === 4) {
      dataArray.push(numbers[1]);
      dataArray.push(numbers[2]);
      dataArray.push(numbers[3]);
      dataArray.push(numbers[4]);
    }
  }

  return dataArray;
};

module.exports = { getCoordinates };
