import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
      selector: 'login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.scss']
})
export class LoginComponent {
      onSubmit(form: NgForm) {
            console.log(form);
            if (!form.valid) {
                  return;
            }
            const username = form.value.username;
            const password = form.value.password;
      }
}
