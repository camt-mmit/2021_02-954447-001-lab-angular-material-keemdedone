import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-list-normal-page',
  templateUrl: './example-list-normal-page.component.html',
  styleUrls: ['./example-list-normal-page.component.scss']
})
export class ExampleListNormalPageComponent implements OnInit {
  readonly data = [
    {
      icon: 'people',text:'A',type:'primary',number: 1
    },
    {
      icon: 'events',text:'B',type:'primary',number: 2
    },
    {
      icon: 'delete',text:'C',type:'warn',number: 3
    },
    {
      icon: 'cancel',text:'D',type:'warn',number: 4
    },
    {
      icon: 'save',text:'E',type:'accent',number: 5
    }
  ]
  constructor() { }

  ngOnInit(): void {
    return
  }

}
