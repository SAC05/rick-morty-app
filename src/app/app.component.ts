import { Component, OnInit, HostListener } from '@angular/core';
import { Result } from './interfaces/character.interface';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  charactersList: Result[] = [];
  currentPage: number = 1;
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.currentPage = 1;
    this.loadCharacters(this.currentPage);
  }
  
  loadCharacters(page: number): void {
    this.characterService.getCharacters(page)
    .subscribe((results: any) => {
      results.data.characters.results.forEach((result: any) => {
        this.charactersList.push(result);
      });
    });
  }

  @HostListener('window:scroll')
  onWindowsScroll() {
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
      this.currentPage += 1;
      this.loadCharacters(this.currentPage);
    }
  }

  goToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
