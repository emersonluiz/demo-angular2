import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent implements OnInit {

  items = [{label:'Registro', link:''},
           {label:'Categoria', link:'..'},
           {label:'Detalhes', link:'detalhes'}];

  category: any = {name: ''};

  constructor(private router: Router) { }

  ngOnInit() {
    this.category = {name: 'Testando o teste'};
  }

  onBack() {
    this.router.navigate(['/registro', 'categoria'])
  }

}
