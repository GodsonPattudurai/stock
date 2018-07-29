import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  isCreate: boolean;
  constructor() { }

  ngOnInit() {
  }
  openCreate() {
    this.isCreate = true;
  }
  closeCreate(eventData: {isClose: boolean}) {
    this.isCreate = eventData.isClose;
  }

}
