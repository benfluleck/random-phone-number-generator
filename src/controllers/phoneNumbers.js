import fs from 'fs-extra';
import path from 'path';

import { generateNumbersForFile, removeFile, generateFile } from '../helpers/phoneNumberUtils';
import NumberValidator from '../validators/number.validator';


const filePath = path.join(__dirname, '../../public/text.txt');

export const generatePhoneNumbers = (req, res) => {
  const { numberOfPhoneNumbers } = req.body;
  const amountOfNumbers = parseInt(numberOfPhoneNumbers);

  let inputNumber = new NumberValidator(amountOfNumbers);

  if (!inputNumber.IsNumber()) {
    return res.status(400).json({ status: 'error', message: 'Please enter a valid number' });
  }

  if (inputNumber.isGreaterThanMaximum(process.env.MAX_VALUE)) {
    return res.status(422).json({ status: 'error', message: `Input Value canot be greater than ${process.env.MAX_VALUE}` });
  }


  if (inputNumber.isLessThanMinimum(process.env.MIN_VALUE)) {
    return res.status(422).json({ status: 'error', message: `Input Value canot be less than ${process.env.MIN_VALUE}` });
  }


  removeFile(filePath, res)

  const stringToBeRead = generateNumbersForFile(amountOfNumbers);

  generateFile(filePath, stringToBeRead.sortedArray, res);

  return res.status(201).json({
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

  const file = path.join(filePath);

  if (!fs.existsSync(file)) {
    return res.status(404).send({ status: 'error', message: 'File does not exist, please generate the file' });
  }

  res.download(file, (err) => {
    if (err) {
      return res.status(err.statusCode).send({ status: 'error', message: 'Something went wrong with the download' });
    }
  });
};
