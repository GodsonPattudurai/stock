import { Component, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactCreateComponent implements OnInit {

  @Output() onCreateClose = new EventEmitter<{isClose: boolean}>();

  constructor() { }

  ngOnInit() {
  }
  closeCreate(){
    this.onCreateClose.emit({isClose : false});
  }
}
