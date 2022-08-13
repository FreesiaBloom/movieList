import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchTerm: string = '';

  constructor(activatedRoute: ActivatedRoute,
    private _router: Router) {
      activatedRoute.params.subscribe((params) => {
        if (params['searchTerm']) {
          this.searchTerm = params['searchTerm'];
        }
      })
    }

  ngOnInit(): void {
  }

  public clearSearchInput(): void {
    this.searchTerm = '';
    this.search(this.searchTerm)
  }

  public search(value: any): void {
    this.searchTerm = value;
    if (this.searchTerm) {
      this._router.navigateByUrl('/search/' + this.searchTerm);
    } else {
      this._router.navigateByUrl('/');
    }
  }
}
