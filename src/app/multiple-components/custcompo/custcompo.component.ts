import { Component } from '@angular/core';

@Component({
  selector: 'app-custcompo',
  templateUrl: './custcompo.component.html',
  styleUrls: ['./custcompo.component.css']
})
export class CustcompoComponent {

  data : any = [
    {
      name: 'Links',
      items: ["Home", "Docs", "Examples", "Themes", "Blog", "Swag Store"]
    },
    {
      name: 'Guides',
      items: ["Getting started", "Starter template", "Webpack", "Parcel"]
    },
    {
      name: 'Projects',
      items: ["Bootstrap 5", "Bootstrap 4", "Icons", "RFS", "npm starter"]
    },
  ]
  textInputData : any= ''
  selectedName: string = '';
  onSubmit() {
    
    console.log('Submitted data:', this.textInputData);
    console.log('Selected name:', this.selectedName);
  }
  onTextClicked(clickedText: string) {
    this.textInputData = clickedText;
  }

}
