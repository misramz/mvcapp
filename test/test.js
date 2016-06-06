// Import Chai
import chai from 'chai';

// Import Any Files to Test
import '../src/js/main';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Testing our Contacts', function () {

  let Contact;

  beforeEach(function () {
    contact = new Contact()
  })

  describe('Testing the Creation of Something', function () {

    it('should exist after we create it', function () {
      let contact = new Contact;
      expect(contact).to.be.an.instanceof(Contact);
    });

  });


});
