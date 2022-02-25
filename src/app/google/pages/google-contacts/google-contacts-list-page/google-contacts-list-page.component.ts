import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionsList } from 'src/app/google/models';
import { GoogleContactsService } from 'src/app/google/services/google-contacts.service';

@Component({
  selector: 'app-google-contacts-list-page',
  templateUrl: './google-contacts-list-page.component.html',
  styleUrls: ['./google-contacts-list-page.component.scss']
})
export class GoogleContactsListPageComponent implements OnInit {
  data$!: Observable<ConnectionsList>;

  constructor(
    private readonly service : GoogleContactsService,
  ) { }

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }

}
