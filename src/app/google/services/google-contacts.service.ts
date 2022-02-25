import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { ConnectionsList, parseConnectionsList, parsePerson, Person } from '../models';
import { GoogleTokenService } from './google-token.service';

const contactsUrl = 'https://people.googleapis.com/v1/people/me/connections?personFields=names,photos,emailAddresses,phoneNumbers'
const createContactsUrl = 'https://people.googleapis.com/v1/people:createContact?personFields=names'

@Injectable({
  providedIn: 'root'
})

export class GoogleContactsService {

  constructor(
    private readonly tokenService : GoogleTokenService,
    private readonly http : HttpClient,
  ) { }

  getAll(params?: {[key: string]:any}): Observable<ConnectionsList> {
    const queryParams = {...params};

    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          return this.http.get(contactsUrl, {
            headers: {
              Authorization: authorizationHeader,
            },
            params: queryParams,
          });
        }
        return of(null);
      }),
      map((data) => parseConnectionsList(data)),
    );
  }

  create(data:any): Observable<Person>{
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader)=>{
        if(authorizationHeader){
          return this.http.post(createContactsUrl,{
              names: [{
                givenName: data.givenName,
                familyName: data.familyName,
              }],
              phoneNumbers: data.phoneNumbers,
              emailAddresses: data.emailAddresses,
            },
            {
              headers: {
                Authorization: authorizationHeader,
              },
            }
          );
        }
        return of(null);
      }),map((data) => parsePerson(data)),
    );
  }

}
