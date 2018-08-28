import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemCreateComponent implements OnInit {

  @Output() onCreateClose = new EventEmitter<{isClose: boolean}>();
  constructor() { }

  ngOnInit() {
  }

  closeCreate(){
    this.onCreateClose.emit({isClose : false});
  }
}
