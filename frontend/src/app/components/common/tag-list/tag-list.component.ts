import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreType } from 'src/app/shared/enums/GenreType';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit{

  @Output() tagFilterEvent = new EventEmitter<string>();

  public tagList = Object.keys(GenreType);

  public activeTag: string = '';

  public isMobileView: boolean = false;

  constructor(private _router: Router,
    activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['tag']) {
        this.activeTag = params['tag'];
      }
    });
  }

  ngOnInit() {
    if (window.screen.width <= 992) { // 768px portrait
      this.isMobileView = true;
    }
  }

  public filter(tag: string): void {
    if (tag) {
      this._router.navigateByUrl('/tag/' + tag);
    } else {
      this._router.navigateByUrl('/');
    }
  }
}
