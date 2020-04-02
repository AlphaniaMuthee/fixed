import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  newDiary = new Diary("","", new Date());
  @Output() addDiary = new EventEmitter<Diary>(); //an event emitter to emmit events to be bound to the parent component

  submitDiary(){
    this.addDiary.emit(this.newDiary);
  }

  constructor() { }

  ngOnInit() {
  }

}
