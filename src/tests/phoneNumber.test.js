import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';


import app from '../app';
import { generateNumbers, removeFile } from './helpers/utils';

chai.use(chaiHttp);

describe('Phone Numbers', () => {
  describe('POST /phonenumbers', () => {
    it('should return a validation error if number of phoneNumbers is not specified', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhonenumbers: '' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(400);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Please enter a valid number');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
    it('should return a validation error if number is not valid', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhonenumbers: 'rrt' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(400);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Please enter a valid number');
          done();
        })

        .catch((err) => {
          done(err);
        });
    });
    it('should return a successfull message if number is greater than 0 and less than 10,000', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhonenumbers: 23 })
        .then((res) => {
          expect(res.status)
            .to
            .equal(201);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('File Generated Successfully');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
    it('should return a successfull message if number is greater than 0 and less than 10,000 and is ordered in descending', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers?order=desc')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhonenumbers: 100 })
        .then((res) => {
          expect(res.status)
            .to
            .equal(201);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('File Generated Successfully');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
    it('should return an error message if number of phone number is less than 2', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhonenumbers: '1' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(422);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Input Value canot be less than 2');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
    it('should return an error message if number of phone number is greater than 10000', (done) => {
      chai
        .request(app)
        .post('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({ numberOfPhonenumbers: '2000000' })
        .then((res) => {
          expect(res.status)
            .to
            .equal(422);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.equal('Input Value canot be greater than 10000');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  describe('GET /phonenumbers', () => {
    it('should succesufully get file information', (done) => {
      chai
        .request(app)
        .get('/api/v1/phoneNumbers')
        .set('Accept', 'application/x-www-form-urlencoded')
        .then((res) => {
          // eslint-disable-next-line no-unused-expressions
          expect(res.text).to.be.a('string').that.is.not.empty;
          expect(res.status)
            .to
            .equal(200);
          expect(res.body).to.be.a('object');
          done();
        })
        .catch((err) => {
          done(err);
        });
      it('should return an error if there is no file to download', (done) => {
        removeFile().then(() => {

        });

        chai
          .request(app)
          .get('/api/v1/phonenumber')
          .set('Accept', 'application/x-www-form-urlencoded')
          .then((res) => {
            expect(res.status)
              .to
              .equal(404);
            expect(res.body).to.be.a('object');
            expect(res.body.message).to.equal('File does not exist, please generate the file');
            done();
          })
          .catch((err) => {
            done(err);
          });
      });
    });
    describe('GET /download', () => {
      it('should return a status code of 200 when downloading a file', (done) => {
        generateNumbers().then(
          (res) => {
          }
        ).then(() => {
          chai
            .request(app)
            .get('/api/v1/download')
            .set('Accept', 'application/x-www-form-urlencoded')
            .then((res) => {
              expect(res.status)
                .to
                .equal(200);
              expect(res.body).to.be.a('object');
              done();
            })
            .catch((err) => {
              done(err);
            });
        });
      });
      it('should return a 404 status code when trying to download a file when it doesn\'t exist', (done) => {
        removeFile().then(() => {

        });

        chai
          .request(app)
          .get('/api/v1/download')
          .set('Accept', 'application/x-www-form-urlencoded')
          .then((res) => {
            expect(res.status)
              .to
              .equal(404);
            expect(res.body).to.be.a('object');
            expect(res.body.message).to.equal('File does not exist, please generate the file');
            done();
          })
          .catch((err) => {
            done(err);
          });
      });
    });
  });
});
