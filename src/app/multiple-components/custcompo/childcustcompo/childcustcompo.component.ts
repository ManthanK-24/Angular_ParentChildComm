import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcustcompo',
  templateUrl: './childcustcompo.component.html',
  styleUrls: ['./childcustcompo.component.css']
})
export class ChildcustcompoComponent {

  @Input() textInputData: any;
  @Input() selectedName: any;
  @Input() data: any[]=[];
  @Output() textClicked: EventEmitter<string> = new EventEmitter<string>();
  onTextClick(item: string) {
    // Emit the clicked text to the parent component
    this.textClicked.emit(item);
  }
}
