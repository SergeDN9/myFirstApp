import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'two beer or not to beer',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'

  };

  constructor() { }

  ngOnInit() {
  }

masquerQuote() {
    const x = document.getElementById('divAge');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }

}

