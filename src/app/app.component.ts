import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyBLpglsOQcQKAbUcuu6gyCsF5juoTgUW-k',
      authDomain: 'angular-blog-c4eea.firebaseapp.com',
      databaseURL: 'https://angular-blog-c4eea.firebaseio.com',
      projectId: 'angular-blog-c4eea',
      storageBucket: 'angular-blog-c4eea.appspot.com',
      messagingSenderId: '503364845103'
    };
    firebase.initializeApp(config);
  }
}
