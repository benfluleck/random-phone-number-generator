import fs from 'fs-extra';
import path from 'path';

import { generateNumbersForFile } from '../helpers/phoneNumberUtils';
import NumberValidator from '../validators/number.validator';


const MAX_VALUE = process.env.MAX_VALUE;
const MIN_VALUE = process.env.MIN_VALUE;

export const generatePhoneNumbers = (req, res) => {
  const { numberOfPhoneNumbers } = req.body;

  let inputNumber = new NumberValidator(numberOfPhoneNumbers);

  if (!inputNumber.IsNumber()) {
    return res.status(400).json({ status: 'error', message: 'Please enter a valid number' });
  }

  if (inputNumber.isGreaterThanMaximum(MAX_VALUE)) {
    return res.status(422).json({ status: 'error', message: `Input Value canot be greater than ${MAX_VALUE}` });
  }

  if (inputNumber.isLessThanMinimum(MIN_VALUE)) {
    return res.status(422).json({ status: 'error', message: `Input Value canot be les than ${MIN_VALUE}` });
  }

  const stringToBeRead = generateNumbersForFile(numberOfPhoneNumbers);

  const generateFile = async () => {
    try {
      await fs.outputFile(path.join(__dirname, '../../public/text.txt'), stringToBeRead.sortedArray, { flag: 'w+' })
    } catch (error) {
      res.status(500).send({ status: 'error', message: error.message })
    }
  }
  generateFile();

  return res.status(200).json({
    status: 'success', message: 'File Generated Successfully',
    data: {
      response: {
        largestNumber: stringToBeRead.maximum,
        smallestNumber: stringToBeRead.minimum
      }
    }
  });
};


export const getPhoneNumbers = (req, res) => {

  const file = path.join(__dirname, '../../public/text.txt');

  if (!fs.existsSync(file)) {
    return res.status(404).send({ status: 'error', message: 'File does not exist, please generate the file' });
  }

  res.download(file, (err) => {
    if (err) {
      return res.status(err.statusCode).send({ status: 'error', message: 'Something went wrong with the download' });
    }
  });
};
