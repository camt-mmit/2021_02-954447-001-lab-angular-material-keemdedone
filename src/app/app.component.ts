import { BreakpointObserver } from '@angular/cdk/layout';
import { Portal } from '@angular/cdk/portal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map, Observable } from 'rxjs';
import { SidenavPortalServiceService } from './service/sidenav-portal-service.service';

const smallWidth = 600;
const mediaQuerySmall = `(max-width:${smallWidth}px)`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav! : MatSidenav

  isSmallScreen$!: Observable<boolean>;
  portal$!: Observable<Portal<unknown> | null>

  constructor(
    private readonly breakpointObservable: BreakpointObserver,
    private readonly sidenavPortalService: SidenavPortalServiceService,
    ) {}

  ngOnInit(): void {
    this.isSmallScreen$ = this.breakpointObservable
      .observe(mediaQuerySmall)
      .pipe(map((result) => result.matches) /* for return boolean */
      );

      this.portal$ = this.sidenavPortalService.portal$;
  }
}
