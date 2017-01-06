import { Component } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html'
})
export class ServiceListComponent {

  items = [{label:'Registro', link:''},
           {label:'Serviço', link:'servico'}];

}
