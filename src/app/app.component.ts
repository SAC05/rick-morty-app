import { Component, OnInit } from '@angular/core';
import { Result } from './interfaces/character.interface';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  charactersList: Result[] = [];
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((result: any) => {
      this.charactersList = result.data.characters.results;
    });
  }
}
