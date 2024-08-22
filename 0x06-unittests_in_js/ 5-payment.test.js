import { spy } from 'sinon';
import { expect } from 'chai';
import sendPaymentRequestToAPI from './5-payment'; // Adjust this path based on your project structure

describe('sendPaymentRequestToAPI', function () {
    let consoleSpy;

    beforeEach(function () {
        // Create a spy on console.log
        consoleSpy = spy(console, 'log');
    });

    afterEach(function () {
        // Restore the original console.log
        consoleSpy.restore();
    });

    it('should log "The total is: 120" and only be called once when called with 100 and 20', function () {
        sendPaymentRequestToAPI(100, 20);

        // Check that console.log was called with the correct string
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

        // Check that console.log was called only once
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('should log "The total is: 20" and only be called once when called with 10 and 10', function () {
        sendPaymentRequestToAPI(10, 10);

        // Check that console.log was called with the correct string
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;

        // Check that console.log was called only once
        expect(consoleSpy.calledOnce).to.be.true;
    });
});
