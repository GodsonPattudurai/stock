import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

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
