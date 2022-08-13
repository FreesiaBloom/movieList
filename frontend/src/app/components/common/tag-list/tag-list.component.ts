import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GenreType } from 'src/app/shared/enums/GenreType';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  @Output() tagFilterEvent = new EventEmitter<string>();

  public tagList = Object.keys(GenreType);

  constructor(private _router: Router) {
   }

  ngOnInit(): void {
  }

  public filter(tag: string): void {
    if (tag) {
      this._router.navigateByUrl('/tag/' + tag);
    } else {
      this._router.navigateByUrl('/');
    }
  }



}
