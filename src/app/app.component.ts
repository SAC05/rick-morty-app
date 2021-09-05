import { Component, OnInit } from '@angular/core';
import { CharactersResponse, Result } from './interfaces/character.interface';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  charactersList: Result[] = [];
  constructor(private _characterService: CharactersService) {}

  ngOnInit(): void {
    this._characterService.getCharacters()
      .subscribe((characters: CharactersResponse) => {
        this.charactersList = characters.results;
      });
  }
}
