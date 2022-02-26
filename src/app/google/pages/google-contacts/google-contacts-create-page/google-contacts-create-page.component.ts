import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/google/models';
import { GoogleContactsService } from 'src/app/google/services/google-contacts.service';

@Component({
  selector: 'app-google-contacts-create-page',
  templateUrl: './google-contacts-create-page.component.html',
  styleUrls: ['./google-contacts-create-page.component.scss']
})
export class GoogleContactsCreatePageComponent implements OnInit {

  constructor(
    private readonly service: GoogleContactsService,
  ) { }

  ngOnInit(): void {
    return;
  }

  onChange(data: Person): void{
    this.service.create(data).subscribe((data:any) => {
      history.back();
    });
  }

  onCancel(){
    history.back();
  }

}
