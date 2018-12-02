import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  public API = '//localhost:8085/usernew';



  getAll(): Observable<any> {
    return this.http.get(this.API + '/allUsers'); // '//localhost:8085/usernew/allUsers'
  }

  get(id: string) {
    return this.http.get(this.API + '/allUsers/finduser' + '/' + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.API + '/allUsers/saveUser', car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
