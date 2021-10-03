import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .loggingColor{
      color: white;
    }
  `]
})
export class AppComponent {

    secretPassword: boolean = true;
    loggedSecretPassword = [];

    logSecretPassword(){
      this.secretPassword = !this.secretPassword;
      this.loggedSecretPassword.push(new Date());
    }

}
