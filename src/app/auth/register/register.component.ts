import { Component } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

interface registerForm {
  name: string;
  email: string;
  password: string;
}
interface firebase {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: registerForm = {
    name: '',
    email: '',
    password: '',
  };
  nameError: string = '';
  str: string = 'This is a sample string';
  wor: any = this.str.split(' ');
  lastNineWord: string = this.wor.slice(9);

  firebaseConfig: firebase = {
    apiKey: 'AIzaSyD_Vv1h9PP3K5OPivMIqv7hW8lFa-ythaY',
    authDomain: 'angularauth-5fd56.firebaseapp.com',
    projectId: 'angularauth-5fd56',
    storageBucket: 'angularauth-5fd56.appspot.com',
    messagingSenderId: '433210226468',
    appId: '1:433210226468:web:ef1249a6dcac90d78565b1',
  };

  firebaseApp = initializeApp(this.firebaseConfig);

  async registerHandler() {
    const auth = getAuth(this.firebaseApp);
    await createUserWithEmailAndPassword(
      auth,
      this.form.email,
      this.form.password
    )
      .then((user) => {
        console.log(user.user);
        updateProfile(user.user, {
          displayName: this.form.name,
        });
      })
      .catch((e) => {
        console.log(e);
        this.nameError = e.code.message;
      });
  }
}
