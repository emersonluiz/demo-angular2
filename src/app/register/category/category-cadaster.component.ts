import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-category-cadaster',
  templateUrl: './category-cadaster.component.html'
})
export class CategoryCadasterComponent implements OnInit {

  items = [{label:'Registro', link:''},
           {label:'Categoria', link:'..'},
           {label:'Cadastro', link:'cadastro'}];

  category: any = {name: ''};

  public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'top']
  };

  constructor(private router: Router, private notificationService: NotificationsService) { }

  ngOnInit() {
    this.category = {name: ''};
  }

  onBack() {
    this.router.navigate(['/registro', 'categoria'])
  }

  save() {
    this.notificationService.success("Sucesso", "Categoria gravada!");
  }

}
