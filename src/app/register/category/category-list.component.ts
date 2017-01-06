import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  items = [{label:'Registro', link:''},
           {label:'Categoria', link:'categoria'}];

  p: boolean = false;
  n: boolean = false;

  list = [];

  private categories = [];
  private listIndex: number;

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


  constructor(private router: Router, private _service: NotificationsService) { }

  ngOnInit() {
    this.listIndex = 0;
    this.list = [{items:[
                          {id:'1', name:'ddddd ddddd dddd ddd'},
                          {id:'2', name:'eee eeeee eeeee eeeee eeee eee'},
                          {id:'3', name:'rrr rrr rrr rrr'},
                          {id:'4', name:'ddddd ddddd dddd ddd'},
                          {id:'5', name:'eee eeeee eeeee eeeee eeee eee'},
                          {id:'6', name:'rrr rrr rrr rrr'},
                          {id:'7', name:'ddddd ddddd dddd ddd'},
                          {id:'8', name:'eee eeeee eeeee eeeee eeee eee'}
                        ]
                  },

                  {items:[
                          {id:'1', name:'ddddd ddddd dddd ddd'},
                          {id:'2', name:'eee eeeee eeeee eeeee eeee eee'},
                          {id:'3', name:'rrr rrr rrr rrr'},
                          {id:'4', name:'ddddd ddddd dddd ddd'},
                          {id:'5', name:'eee eeeee eeeee eeeee eeee eee'},
                          {id:'6', name:'rrr rrr rrr rrr'},
                          {id:'7', name:'ddddd ddddd dddd ddd'},
                          {id:'8', name:'eee eeeee eeeee eeeee eeee eee'}
                        ]
                  },

                  {items:[
                          {id:'1', name:'sssss ccccc dddd ddd'},
                          {id:'2', name:'eee eeeee eeeee eeeee eeee eee'},
                          {id:'3', name:'rrr rrr rrr rrr'},
                          {id:'4', name:'ddddd ddddd dddd ddd'},
                          {id:'5', name:'eee eeeee eeeee eeeee eeee eee'}
                        ]
                  }
                ];
    this.categories = this.list[this.listIndex].items;
    this.n = true;
  }

  delete() {
    this._service.success('Sucesso', 'Categoria excluida!');
  }

   onCreate(event) {
        console.log(event);
    }

    onDestroy(event) {
        console.log(event);
    }

  onNext() {
    if (this.n) {
      if ((this.listIndex + 1) <= this.list.length) {
        this.listIndex = this.listIndex + 1;
        this.categories = this.list[this.listIndex].items;
        this.p = true;
        if ((this.listIndex + 1) < this.list.length) {
          this.n = true;
        } else {
          this.n = false;
        }
      }
    }
  }

  onPrevious() {
    if (this.p) {
      if ((this.listIndex - 1) >= 0) {
        this.listIndex = this.listIndex - 1;
        this.categories = this.list[this.listIndex].items;
        this.n = true;
        if ((this.listIndex - 1) >= 0) {
          this.p = true;
        } else {
          this.p = false;
        }
      }
    }
  }

  onAdd() {
    this.router.navigate(['/registro', 'categoria', 'cadastro'])
  }

  onEdit() {
    this.router.navigate(['/registro', 'categoria', 'cadastro'])
  }

}
