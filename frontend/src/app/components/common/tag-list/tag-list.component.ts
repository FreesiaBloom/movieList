import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreType } from 'src/app/shared/enums/GenreType';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {

  @Output() tagFilterEvent = new EventEmitter<string>();

  public tagList = Object.keys(GenreType);

  public activeTag: string = '';

  constructor(private _router: Router,
    activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['tag']) {
        this.activeTag = params['tag'];
      }
    });
  }

  public filter(tag: string): void {
    if (tag) {
      this._router.navigateByUrl('/tag/' + tag);
    } else {
      this._router.navigateByUrl('/');
    }
  }
}
