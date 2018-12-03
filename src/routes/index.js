import { Router } from 'express';

import { generatePhonenumbers, downloadPhonenumbers, getPhonenumbersInfo } from '../controllers/phonenumbers';

export const indexRouter = Router();

indexRouter.route('/')
.get(
  (req, res) => res.status(200).json('Welcome to the phone generator endpoints')
  );

  indexRouter.route('/phonenumbers')
  .post(generatePhonenumbers)
  .get(getPhonenumbersInfo)

  indexRouter.get('/download', downloadPhonenumbers )


