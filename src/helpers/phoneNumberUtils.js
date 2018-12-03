import fse from 'fs-extra';

export const generateNumbersForFile = (amountSpecified) => {
  let generatedSet = new Set();

  for (let i = 0; i < amountSpecified; i++) {
    const phoneNumberGenerated = String(Math.floor(Math.random() * 900000000) + 100000000);
    const padZeroToPhoneNumber = phoneNumberGenerated.padStart(10, '0');

    generatedSet.add(padZeroToPhoneNumber);
  }

  const sortedArray = Array.from(generatedSet).sort();

  return { sortedPhonenumbers: sortedArray.join('\n')}
};

export const removeFile = async (path, res) => {
  try {
    await fse.remove(path)
  } catch (err) {
    res.status(500).send({ status: 'error', message: err.message })
  }
}

export const generateFile = async (path, data, res) => {
  try {
    await fse.outputFile(path, data, { flag: 'w+' })
  } catch (error) {
    res.status(500).send({ status: 'error', message: error.message })
  }
}

