import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenreType } from 'src/app/shared/enums/GenreType';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  public tag: string = '';

  @Output() tagFilterEvent = new EventEmitter<string>();

  public tagList = Object.keys(GenreType);

  constructor() { }

  ngOnInit(): void {
  }

  public filter(tag: string): void {
    this.tag = tag;
    this.tagFilterEvent.emit(tag);
  }

}
