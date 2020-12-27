import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ArticlesService } from '../../../services/articles/articles.service';
import { articleList } from '../../../models/articles.models';
import { set_articles } from '../../../store/articles/articles.actions';

import { AppState } from '../../../store/articles/articles.state';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articles:articleList[] = []

  constructor(
    private articles_service: ArticlesService,
    private store: Store<AppState>
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
