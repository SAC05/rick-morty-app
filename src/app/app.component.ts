import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Result } from './interfaces/character.interface';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  charactersList: Result[] = [];
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
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
    .valueChanges.subscribe((result: any) => {
      console.log(result);
      this.charactersList = result.data.characters.results;
    })
  }
}
