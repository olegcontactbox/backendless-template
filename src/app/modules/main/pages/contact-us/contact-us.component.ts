import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;


  constructor(private fb: FormBuilder, private firebaseService: FirebaseService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['userName', Validators.required],
      email: ['userEmail', Validators.required],
      subject: ['subject', Validators.required],
      message: ['message', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form);
    if (!this.form.valid) { return; }
    this.firebaseService.sendMessage(this.form.value)
      .then(res => this.notificationService.snackbar('Thanks! Your message successfully sent'))
      .catch(e => this.notificationService.snackbar('Error!'));
  }

}
