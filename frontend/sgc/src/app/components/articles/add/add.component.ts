import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/articles.models';
import { Store } from '@ngrx/store';
import { set_brands } from '../../../store/brands/brands.actions';

import { BrandService } from '../../../services/articles/brand.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  brands:Marca[] = []

  constructor(
    private brand_service: BrandService,
    private store: Store
  ) { 
    this.store.subscribe( state => this.brands = state['brands']);
  }

  ngOnInit(): void {
    this.brand_service.getBrand().subscribe( data => {
      this.store.dispatch(set_brands({ marcas: data }));
    });
  }

}
