import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CurrentParamsService } from 'src/app/services/currentParamsService/current-params.service';
import { setSearchTerm, resetSearchTerm, getSearchTerm } from 'src/app/store/searchTerm/searchTerm.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  public term$!: Observable<string>

  public searchTerm: string = '';

  public params: any;

  constructor(private _router: Router,
    private _currentParams: CurrentParamsService,
    private store: Store<{ term: string }>) {

    this.term$ = store.select('term');
    this.setSearchTermFromStore();

    console.log(this.store.dispatch(getSearchTerm()));

    this._assignSearchTerm();
  }

  private setSearchTermFromStore() {
    this.store.select('term').subscribe(term => {
      this.searchTerm = term;
    });
  }

  private _assignSearchTerm() {
    this._currentParams.getCurrentParams().subscribe(params => {
      if (params['searchTerm']) {
        this.store.dispatch(setSearchTerm({content: params['searchTerm']}));

        this.setSearchTermFromStore();
        return this.searchTerm = params['searchTerm'];
      }
      return params;
    });
  }

  public clearSearchInput(): void {
    this.store.dispatch(resetSearchTerm());
    this.setSearchTermFromStore();

    this.search()
  }

  public search(): void {
    this._assignSearchTerm();

    if (this.searchTerm) {
      this._router.navigateByUrl('/search/' + this.searchTerm);
    } else {
      this._router.navigateByUrl('/');
    }
  };
}
