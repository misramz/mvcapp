import { Contact} from '../models/contact';

import $ from 'jquery';

export class AppController {

  constructor(contactForm, contactList) {
    this.contactForm = contactForm;
    this.contactList = contactList;
  }

  init() {
    this.formSubmit();
    this.deleteButton();
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

      this.deleteButton();

      form.children('input').val('');

    });

  }

  deleteButton() {
    // register the click

    console.log('I am looking for clicks on: ', $('.deleteBtn'));


    $('.deleteBtn').click(function() {
      let button = $(this);
      console.log(button);
      let toDelete = button.parent();
      console.log(toDelete);
      toDelete.remove();
    });
  }


  // apply input to my list area
  appendTemplate(contact) {
    return `
      <li class='contactCard'>
        <h3> ${contact.name}</h3>
        <h3> ${contact.address}</h3>
        <h3> ${contact.number}</h3>
        <img src='${contact.photoURL}'>
        <button class="deleteBtn"> Delete </button>
      </li>`;
  }
}
