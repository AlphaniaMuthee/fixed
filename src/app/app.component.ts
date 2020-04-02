import { Component, OnInit } from '@angular/core';
import { Diary } from './diary'

@Component({
  selector: 'app-diary',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaries: Diary[] = [
    new Diary('My Feelings', 'I feel sad today', new Date(12-3-2020)),
    new Diary('My Plans', 'Go swimming', new Date(14-3-2020)),
  ];
}
