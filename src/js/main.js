import $ from 'jquery';
import _ from 'lodash';

import { AppController } from './controllers/app-controller';

let contactForm = $('.contacts');
let contactList = $('.people');

let app = new AppController (contactForm, contactList);

app.init();

 
