import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyALpSVNjYXd4sc1cGujIn1b_CJfNxErLdk",
      authDomain: "ngx-recipe-book-ca109.firebaseapp.com"
    })
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
