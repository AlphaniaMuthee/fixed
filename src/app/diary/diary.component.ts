import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaries: Diary[] = [
    new Diary('My Feelings', 'I feel sad today', new Date(12-3-2020)),
    new Diary('My Plans', 'Go swimming', new Date(14-3-2020)),
  ];
  toggleDetails(index){
    this.diaries[index].showEntry = !this.diaries[index].showEntry;
  }

  constructor() { }

  ngOnInit(): void {
  }
  addNewDiary(diary){
    this.diaries.push(diary)
  }
}
