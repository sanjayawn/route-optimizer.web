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

 // GET request to fetch data from API
 getPath(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}dijkstra/getpath`);
}

getShortestPath(fromNode: string, toNode: string): Observable<any> {
  const params = new HttpParams()
      .set('fromNode', fromNode)
      .set('toNode', toNode);

  return this.http.get<any>(`${this.apiUrl}dijkstra/GetShortestPath`, { params });
}

}
