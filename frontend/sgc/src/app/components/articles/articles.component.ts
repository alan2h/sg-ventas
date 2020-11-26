import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../services/articles/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private articles_service: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articles_service.getArticles().subscribe(data => {
      console.log(data);
    })
  }

}
