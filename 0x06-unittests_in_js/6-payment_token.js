const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
    }
  });
  
  module.exports = getPaymentTokenFromAPI;
  const { expect } = require('chai');
  const getPaymentTokenFromAPI = require('./6-payment_token');
  
  describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI(success), where success == true', (done) => {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.deep.equal({data: 'Successful response from the API'});
          done();
        });
    });
  });
