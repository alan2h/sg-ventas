import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ArticlesService } from '../../services/articles/articles.service';
import { articleList } from '../../models/articles.models';
import { set_articles } from '../../store/articles/articles.actions';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:articleList[] = []

  constructor(
    private articles_service: ArticlesService,
    private store: Store
  ) {
     this.store.subscribe(state => {
       this.articles = state['articles']['results']; // seteo state
     })
   }
  

  ngOnInit(): void {
    this.articles_service.getArticles().subscribe(data => {
       this.store.dispatch(set_articles({articles: data}))
    })  
  }

}
