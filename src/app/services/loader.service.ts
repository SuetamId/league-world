import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _loading = new BehaviorSubject<boolean>(false);
  public loading$ = this._loading.asObservable();

  show(){
    return this._loading.next(true);
  }

  hide() {
    return this._loading.next(false);
  }
}
