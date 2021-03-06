import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { memory } from '../../schema/memory';

@Component({
  selector: 'app-memory-item',
  templateUrl: './memory-item.component.html',
  styleUrls: ['./memory-item.component.scss'],
})
export class MemoryItemComponent implements OnInit {
@Input() entry: memory;
@Output() public remove = new EventEmitter<memory>();
  constructor() { }

  ngOnInit() {}

  //child passes the info to the parent to remove the entry
  removeMemory() {
    this.remove.emit(this.entry);
  }

}
