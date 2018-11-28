import { Router } from 'express';

import { generatePhoneNumbers, getPhoneNumbers } from '../controllers/phoneNumbers';

export const indexRouter = Router();

indexRouter.route('/')
  .get(
    (req, res) => res.status(200).json('Welcome to the phone generator endpoints')
  );

indexRouter.route('/phoneNumbers')
  .post(generatePhoneNumbers)
  .get(getPhoneNumbers);

