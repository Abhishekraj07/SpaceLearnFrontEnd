import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
  baseUrl: string = 'http://localhost:8080/queries/';

  constructor() { }
}
