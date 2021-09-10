import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private apollo: Apollo) { }

  getCharacters(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
      {
        characters(page: 1) {
          results {
            id
            name
            image
            status
            location {
              name
            }
          } 
        }
      }`,
    })
    .valueChanges;
  }
}
