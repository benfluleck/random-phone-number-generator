import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

chai.use(chaiHttp);

describe('Miscellaneous Routes', () => {
  it('should return a 404 for Routes not Found', (done) => {
    chai
      .request(app)
      .get('/api/v1/phone')
      .set('Accept', 'application/x-www-form-urlencoded')
      .then((res) => {
        expect(res.status)
          .to
          .equal(404);
        expect(res.body.error.message).to.equal('Not Found');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  it('should return welcome message when navigating to the index route', (done) => {
    chai
      .request(app)
      .get('/api/v1')
      .set('Accept', 'application/x-www-form-urlencoded')
      .then((res) => {
        expect(res.status)
          .to
          .equal(200);
        expect(res.body).to.equal('Welcome to the phone generator endpoints');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

