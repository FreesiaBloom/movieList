import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentParamsService {

  constructor(private router: Router) {
  }

  value='test';

  public getCurrentParams(): Observable<any> {
    return this.router.events
      .pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      );
  }
}
