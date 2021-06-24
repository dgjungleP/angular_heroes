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
  constructor(private messageService: MessageService) {}
}
