import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentParamsService } from 'src/app/services/currentParamsService/current-params.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  public params: any;

  constructor(private _router: Router,
    private _currentParams: CurrentParamsService) {
      this._assignSearchTerm();
    }

  private _assignSearchTerm() {
    this._currentParams.getCurrentParams().subscribe(params => {
      if (params['searchTerm']) {
        return this.searchTerm = params['searchTerm'];
      }
      return params;
    });
  }

  public clearSearchInput(): void {
    this.searchTerm = '';
    this.search(this.searchTerm)
  }

  public search(value: any): void {
    this.searchTerm = value;
    this._assignSearchTerm();

    if (this.searchTerm) {
      this._router.navigateByUrl('/search/' + this.searchTerm);
    } else {
      this._router.navigateByUrl('/');
    }
  };
}
