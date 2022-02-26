import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavPortalServiceService } from 'src/app/service/sidenav-portal-service.service';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortal) portal! : Portal<unknown>;

  constructor(
    private readonly sidenavPortalService : SidenavPortalServiceService
  ) { }

  ngOnInit(): void {
    return;
  }

  ngAfterViewInit(): void {
    this.sidenavPortalService.setPortal(this.portal);
  }

}
