import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DijkstraService {

private apiUrl=environment.apiUrl;

constructor(private http: HttpClient) { }


GetShortestPath(favorite: any): Observable<any> {
  return this.http.post(
    `${environment.apiUrl}dijkstra/GetShortestPath`,
    favorite
  );
}

}
