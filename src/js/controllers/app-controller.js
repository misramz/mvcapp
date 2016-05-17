import { Contact} from '../models/contact';

export class AppController {

  constructor(contactForm, contactList) {
    this.contactForm = contactForm;
    this.contactList = contactList;
  }

  init() {
    this.formSubmit();
  }

  formSubmit(){
    this.contactForm.on('submit',(event) => {
      event.preventDefault();
      console.log('form submit');

      let form = this.contactForm;

      let name = form.children('.name').val();




      let contact = new contact (name, address....);

      contact {
        name: '...'
      }

      


    })
  }
}
