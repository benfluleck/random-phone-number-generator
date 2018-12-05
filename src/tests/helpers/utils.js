
import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs-extra';
import path from 'path';

import app from '../../app';



chai.use(chaiHttp);


export const generateNumbers = () => new Promise((resolve, reject) => {
  chai
    .request(app)
    .post('/api/v1/phonenumbers')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({ numberOfPhonenumbers: 100 })
    .end((err, res) => {
      if (err) reject(err);
      resolve(res);
    })
})

export const removeFile = () => new Promise((resolve, reject) => {
  const filePath = path.join(__dirname, '../../../public/text.txt');
  fs.remove(filePath)
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    });
})

