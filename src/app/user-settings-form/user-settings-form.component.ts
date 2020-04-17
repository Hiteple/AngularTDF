import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, NgForm, NgModel} from '@angular/forms';
import {UserSettings} from '../data/user-settings';
import {UserDataService} from '../data/user-data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  @ViewChild('form') form: Form;
  subscriptionTypes: Array<string>;
  singleModel = 'on';
  originalUserSettings: UserSettings = {
    name: '',
    offers: true,
    interfaceStyle: 'Dark',
    subscriptionType: 'Annual',
    notes: 'Here are some notes'
  };

  userSettings: UserSettings = {...this.originalUserSettings};

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getSubscriptionTypes().subscribe(
      (arr) => this.subscriptionTypes = arr,
      (err) => console.log(err)
    );
  }

  handleSubmit(form: NgForm): void {
    console.log(form);
    this.userDataService.postUserSettings(this.userSettings).subscribe(
      (result) => console.log('Logging the result', result),
      (error) => console.log('Logging out potential error', error)
    );
  }

  // Can obtain the control itself
  handleBlur(field: NgModel) {
    console.log(field);
  }
}
