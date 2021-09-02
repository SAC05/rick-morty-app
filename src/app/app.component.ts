import { Component, OnInit } from '@angular/core';
import { CharactersResponse } from './interfaces/character.interface';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _characterService: CharactersService) {}

  ngOnInit(): void {
    this._characterService.getCharacters()
      .subscribe((characters: CharactersResponse) => {
        console.log(characters);
      })
  }
}

