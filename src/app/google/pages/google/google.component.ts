import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SidenavPortalServiceService } from 'src/app/service/sidenav-portal-service.service';
import { GoogleTokenService } from '../../services/google-token.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortal) portal!: Portal<unknown>;

  tokenReady$!: Observable<boolean | null>;
  authorizationLinks$!: Observable<string>;

  constructor(
    private readonly TokenService: GoogleTokenService,
    private readonly sidenavPortalService: SidenavPortalServiceService,
    ) {}

  ngOnInit(): void {
    this.tokenReady$ = this.TokenService.tokenReady$;
    this.authorizationLinks$ = this.TokenService.getAuthorizationLink();
  }

  ngAfterViewInit(): void {
    this.sidenavPortalService.setPortal(this.portal);
  }

}
