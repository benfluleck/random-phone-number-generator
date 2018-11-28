/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs-extra';
import path from 'path';

import app from '../app';


chai.use(chaiHttp);

describe('Phone Numbers', () => {
  describe('POST', () => {
    it('should return a validation error if number of phoneNumbers is not specified', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhoneNumbers: '' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(400);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Please enter a valid number');
          done();
        }).catch((err) => {
          done(err);
        });
    });
    it('should return a validation error if number is not valid', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhoneNumbers: 'rrt' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(400);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Please enter a valid number');
          done();
        }).catch((err) => {
          done(err);
        });
    });
    it('should return a validation error if number is not valid', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhoneNumbers: 'rrt' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(400);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Please enter a valid number');
          done();
        }).catch((err) => {
          done(err);
        });
    });
    it('should return a succesfull messeage if numer of phone numbers is greater than 0', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhoneNumbers: 23 })
        .then((res) => {
          expect(res.status)
            .to
            .equal(201);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('File Generated Successfully');
          done();
        }).catch((err) => {
          done(err);
        });
    });
    it('should return an error message if number of phone number is less than 2', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhoneNumbers: '1' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(422);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Input Value canot be less than 2');
          done();
        }).catch((err) => {
          done(err);
        });
    });
    it('should return an error message if number of phone number is greater than 10000', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhoneNumbers: '2000000' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(422);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Input Value canot be greater than 10000');
          done();
        }).catch((err) => {
          done(err);
        });
    });
  });
  describe('GET', () => {
    it('should succesufully download a file', (done) => {
      chai
        .request(app)
        .get('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .then((res) => {
          expect(res.text).to.be.a('string').that.is.not.empty;
          expect(res.status)
            .to
            .equal(200);
          expect(res.body).to.be.a('object');

          done();
        }).catch((err) => {
          done(err);
        });

    });
    it('should return an error if there is no file to download', (done) => {
      const filePath = path.join(__dirname, '../../public/text.txt');

      fs.remove(filePath)
        .then(() => {
          console.log('successfully deleted file');
        })
        .catch((err) => {
          console.error(err);
        });

      chai
        .request(app)
        .get('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .then((res) => {

          expect(res.status)
            .to
            .equal(404);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('File does not exist, please generate the file');
          done();
        }).catch((err) => {
          done(err);
        });
    });
  });
});
