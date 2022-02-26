import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavPortalServiceService } from 'src/app/service/sidenav-portal-service.service';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortal) portal! : Portal<unknown>;

  constructor(
    private readonly sidenavPortalService: SidenavPortalServiceService,
  ) { }

  ngAfterViewInit(): void {
    this.sidenavPortalService.setPortal(this.portal);
  }

  ngOnInit(): void {
    return;
  }

}
