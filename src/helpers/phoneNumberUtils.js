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
