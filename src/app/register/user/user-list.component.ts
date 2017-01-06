import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  items = [{label:'Registro', link:''},
           {label:'Usuário', link:'usuario'}];
}
