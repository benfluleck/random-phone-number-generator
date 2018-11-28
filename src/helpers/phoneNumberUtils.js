import fs from 'fs-extra';

export const generateNumbersForFile = (amountSpecified) => {
  let generatedSet = new Set();

  for(let i = 0; i < amountSpecified; i++) {
    const phoneNumberGenerated = String(Math.floor(Math.random() * 900000000) + 100000000);
    const padZeroToPhoneNumber = phoneNumberGenerated.padStart(10, '0');

    generatedSet.add(padZeroToPhoneNumber);
  }

  const sortedArray = Array.from(generatedSet).sort();

  return { sortedArray: sortedArray.join('\n'), minimum: sortedArray[ 0 ], maximum: sortedArray[ sortedArray.length -1 ] }
};

export const removeFile = async (path, res) => {
  try {
    await fs.remove(path)
  } catch (err) {
    res.status(500).send({ status: 'error', message: err.message })
  }
}

export const generateFile = async (path, data, res) => {
  try {
    await fs.outputFile(path, data, { flag: 'w+' })
  } catch (error) {
    res.status(500).send({ status: 'error', message: error.message })
  }
}
