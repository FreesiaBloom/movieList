import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  public clearSearchInput(): void {
    this.searchTerm = '';
    this.search(this.searchTerm)
  }

  public search(value: any): void {
    this.searchTerm = value;
    this.searchEvent.emit(this.searchTerm);
  }
}
