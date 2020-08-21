import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index.js';
import Region from '../src/modules/region/region.model.js';

chai.should();
chai.use(chaiHttp);

describe('Auth API', () => {

  before(function(done) {
    server.on('DbConnection', function() {
      console.log('db con finished');
      done();
    });
  });

  describe('GET api/regions', () => {
    it('should return regions', function(done) {
      chai.request(server)
          .get('/api/regions')
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.an('object');
            done();
          });
    });
  });

  describe('GET api/regions/districts', () => {
    it('should return regions with districts', function(done) {
      chai.request(server)
          .get('/api/regions/districts')
          .end((err, res) => {
            res.should.have.status(200);
            res.body[0].should.have.property('districts').be.an('array');

            done();
          });
    });

  });

  describe('GET api/regions/:id/districts', () => {
    it('should reject invalid objectID regions with districts', function(done) {
      chai.request(server)
          .get('/api/regions/not-valid/districts')
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.have.property('status').eq(false);

            done();
          });
    });

    it('should return an array of region districts', function(done) {
      Region.findOne().then(region => {
        chai.request(server)
            .get(`/api/regions/${region._id}/districts`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.an('array');

              done();
            });
      });
    });
  });
});