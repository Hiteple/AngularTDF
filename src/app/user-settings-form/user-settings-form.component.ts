import {Component, OnInit, ViewChild} from '@angular/core';
import {Form} from '@angular/forms';
import {UserSettings} from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  @ViewChild('form') form: Form;
  originalUserSettings: UserSettings = {
    name: '',
    offers: true,
    interfaceStyle: 'Dark',
    subscriptionType: 'Annual',
    notes: 'Here are some notes'
  };

  userSettings: UserSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit(): void {

  }

  handleSubmit(): void {
    console.log(this.form);
  }
}
