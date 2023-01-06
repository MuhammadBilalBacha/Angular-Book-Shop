import { Router } from '@angular/router';
import { Component } from '@angular/core';
// import { EmailValidator } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
interface loginForm {
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  firebaseConfig: firebase = {
    apiKey: 'AIzaSyD_Vv1h9PP3K5OPivMIqv7hW8lFa-ythaY',
    authDomain: 'angularauth-5fd56.firebaseapp.com',
    projectId: 'angularauth-5fd56',
    storageBucket: 'angularauth-5fd56.appspot.com',
    messagingSenderId: '433210226468',
    appId: '1:433210226468:web:ef1249a6dcac90d78565b1',
  };

  firebaseApp = initializeApp(this.firebaseConfig);

  form: loginForm = {
    email: '',
    password: '',
  };
  userToken: any = '';
  authenticate: boolean = false;
  async loginHandler() {
    const auth = getAuth(this.firebaseApp);
    await signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((user) => {
        console.log(user.user.uid);
        localStorage.setItem('user', user.user.uid);
        // this.userToken =
      })
      .catch((error) => {
        alert(error);
      });
  }
  ngOnInit() {
    this.userToken = localStorage.getItem('user');
    if (this.userToken.length !== 0) {
      this.authenticate = true;
      this.router.navigate(['']);
    }
  }
}
