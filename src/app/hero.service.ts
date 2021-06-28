import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-herord';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heros;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService:fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) {}
}
