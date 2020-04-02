export class Diary {
    public showEntry: boolean;
  constructor(public title: string,public entry: string, public entryDate: Date){
    this.showEntry=false;
  }
}
