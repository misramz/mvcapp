
import chai from 'chai';

// Import Any Files to Test
import { Contact } from '../src/js/models/contact';
import { AppController } from '../src/js/controllers/app-controller';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Testing our Contacts Class', function () {


  describe('Testing the Creation of Something', function () {

    it('should be an instance of a new contact when created', function () {
      let contact = new Contact();
      expect(contact).to.be.an.instanceof(Contact);
    });

    it('should be an instance of an application controller when created', function () {
      let app = new AppController();
      expect(app).to.be.an.instanceof(AppController);
    });

  });


});
