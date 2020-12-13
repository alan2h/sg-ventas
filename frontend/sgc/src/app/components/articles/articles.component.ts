import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../services/articles/articles.service';
import { articleList } from '../../models/articles.models';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:Array<any> = []

  constructor(
    private articles_service: ArticlesService
  ) { }
  

  ngOnInit(): void {
    this.articles_service.getArticles().subscribe(data => {
      this.articles = data.results;
    })
  }

}
