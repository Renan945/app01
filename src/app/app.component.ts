import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Artigos', url: '/folder/Outbox', icon: 'newspaper' },
    { title: 'Contatos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Sobre', url: '/folder/Archived', icon: 'information-circle' },
  ];
  
  constructor() {}
}
