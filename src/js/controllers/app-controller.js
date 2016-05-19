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


      let form = this.contactForm;

      let name = form.children('.name').val();
      let address = form.children('.address').val();
      let number = form.children('.number').val();
      let photoURL = form.children('.photoURL').val();
      let contact = new Contact (name, address, number, photoURL);

      let html = this.appendTemplate(contact);

      this.contactList.append(html);

      form.children('input').val('');

    });
  }


    // apply input to my list area
    appendTemplate(contact) {
      return ` <li class='contactCard'>
          <h3> ${contact.name}</h3>
          <h3> ${contact.address}</h3>
          <h3> ${contact.number}</h3>
          <img src='${contact.photoURL}'>
          </li>`;}
  }
